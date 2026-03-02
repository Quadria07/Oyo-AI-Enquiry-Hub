import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import { findAnswer, qaData } from './data/qa';

// Load environment variables from .env file
dotenv.config();

// Get the token from the environment variable
const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('ERROR: TELEGRAM_BOT_TOKEN is missing in the .env file.');
    console.error('Please create a bot via @BotFather on Telegram, get your token, and add it to .env');
    process.exit(1);
}

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

console.log('Oyo AI Enquiry Hub (Telegram Bot) is now running!');
console.log('Waiting for messages...');

// Listen for any kind of message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (!text) return;

    // 1. Handle /start command — List all available categories and questions
    if (text === '/start') {
        const buildSection = (title: string, category: 'news' | 'verification' | 'contact') => {
            const questions = qaData
                .filter(q => q.category === category && !q.outOfScope)
                .map(q => `/${category}_${q.id} - ${q.question}`)
                .join('\n');
            return `*${title}*\n${questions}`;
        };

        const welcomeMessage =
            `Ẹ káàbọ̀! Welcome to the *Oyo AI Enquiry Hub*.

Please tap on any of the commands below to instantly get a verified response:

${buildSection('News Enquiries', 'news')}

${buildSection('Verification Enquiries', 'verification')}

${buildSection('Contact & Places Enquiries', 'contact')}`;

        bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
        return;
    }

    // 2. Handle direct command clicks (e.g., /news_1, /contact_9)
    const cmdMatch = text.match(/^\/(news|verification|contact)_(\w+)/);
    if (cmdMatch) {
        const category = cmdMatch[1];
        const id = cmdMatch[2];

        const entry = qaData.find(q => q.category === category && q.id === id);

        if (entry) {
            let response = `${entry.answer}\n\n`;
            response += `_Confidence Level: ${entry.confidence}_`;
            bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
        } else {
            bot.sendMessage(chatId, 'This query is outside the current demonstration dataset. Please try a different question.');
        }
        return;
    }

    console.log(`Received text: "${text}"`);

    // 3. Fallback: Try to handle free-text questions just like the web app
    let category: 'news' | 'verification' | 'contact' = 'news';
    const lowerText = text.toLowerCase();

    if (lowerText.includes('verify') || lowerText.includes('true') || lowerText.includes('fake') || lowerText.includes('claim')) {
        category = 'verification';
    } else if (lowerText.includes('contact') || lowerText.includes('where') || lowerText.includes('address') || lowerText.includes('taxi') || lowerText.includes('location')) {
        category = 'contact';
    }

    const entry = findAnswer(category, text);

    if (entry?.outOfScope) {
        bot.sendMessage(chatId, 'This question is not available within the current knowledge scope for Oyo State.');
    } else if (entry) {
        let response = `${entry.answer}\n\n_Confidence Level: ${entry.confidence}_`;
        bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
    } else {
        bot.sendMessage(chatId, 'This query is outside the current demonstration dataset. Please try a different question about Oyo State, or type /start to see the menu.');
    }
});
