import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { findAnswer } from './data/qa';

// Load environment variables from .env file
dotenv.config();

// Get the token from the environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('❌ ERROR: TELEGRAM_BOT_TOKEN is missing in the .env file.');
    console.error('Please create a bot via @BotFather on Telegram, get your token, and add it to .env');
    process.exit(1);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

console.log('✅ Oyo AI Enquiry Hub (Telegram Bot) is now running!');
console.log('Waiting for messages...');

// Listen for any kind of message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!text) return;

    // Handle /start command
    if (text === '/start') {
        const welcomeMessage = `Ẹ káàbọ̀! Welcome to the *Oyo AI Enquiry Hub*. 🏛️\n\nI can assist you with:\n📰 *News* Updates\n✅ *Verification* of public claims\n📍 *Contact* & Places\n\nWhat would you like to know about Oyo State today?`;

        bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
        return;
    }

    console.log(`Received question: "${text}"`);

    // We don't know the exact category they want from a raw Telegram text, 
    // so we search across all categories by trying them, or we can just search 'news' as default for the prototype.
    // For a better prototype, we'll try categorizing loosely based on keywords.

    let category: 'news' | 'verification' | 'contact' = 'news';
    const lowerText = text.toLowerCase();

    if (lowerText.includes('verify') || lowerText.includes('true') || lowerText.includes('fake') || lowerText.includes('claim')) {
        category = 'verification';
    } else if (lowerText.includes('contact') || lowerText.includes('where') || lowerText.includes('address') || lowerText.includes('taxi') || lowerText.includes('location')) {
        category = 'contact';
    }

    // Find the answer using our existing web app logic
    const entry = findAnswer(category, text);

    if (entry?.outOfScope) {
        bot.sendMessage(chatId, '⚠️ This question is not available within the current knowledge scope for Oyo State.');
    } else if (entry) {
        // Format the answer
        let response = `${entry.answer}\n\n`;
        response += `_Confidence Level: ${entry.confidence}_`;

        bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
    } else {
        bot.sendMessage(chatId, 'This query is outside the current demonstration dataset. Please try a different question about Oyo State.');
    }
});
