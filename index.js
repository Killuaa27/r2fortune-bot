require('dotenv').config()
const TeleBot = require('telebot');
var functions = require('./functions.js');
const isActiveId = {};

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

/* Utility commands */
bot.on('/start', (msg) => {
    functions.readFun(function (fortune) {
        activeId[msg.from.id] = 1;
        return bot.sendMessage(msg.from.id, "Hello user\n" + fortune);
    });
});

bot.on('/stop', (msg) => {
    functions.readFun(function (fortune) {
        activeId[msg.from.id] = 0;
        return bot.sendMessage(msg.from.id, "Goodbye user\n" + fortune);
    });
});

/* Show commands */
bot.on(['/commands', '/help'], (msg) => {
    return bot.sendMessage(msg.from.id, "/start - Start r2fortunes\n/commands - Show this menu\n/creepy - Get creepy fortune\n/fun - Get fun fortune\n/nsfw - Get nsfw fortune\n/tip - Get tip fortune\n/stop - Stop r2fortunes");
});



/* Read creepy */
bot.on(/creepy*/i, (msg) => {
    if (isActiveId[msg.from.id] !== false) {
        functions.readCreepy(function (fortune) {
            return bot.sendMessage(msg.from.id, fortune, {
                replyToMessage: msg.message_id
            });
        });
    }
});

/* Read Fun */
bot.on(/fun*/i, (msg) => {
    if (isActiveId[msg.from.id] !== false) {
        functions.readFun(function (fortune) {
            return bot.sendMessage(msg.from.id, fortune, {
                replyToMessage: msg.message_id
            });
        });
    }
});

/* Read nsfw */
bot.on(/nsfw*/i, (msg) => {
    console.log("nsfw");
    if (isActiveId[msg.from.id] !== false) {
        functions.readNsfw(function (fortune) {
            return bot.sendMessage(msg.from.id, fortune, {
                replyToMessage: msg.message_id
            });
        });
    }
});

/* Read tip */
bot.on(/tip*/i, (msg) => {
    console.log("tip");
    if (isActiveId[msg.from.id] !== false) {
        functions.readTip(function (fortune) {
            return bot.sendMessage(msg.from.id, fortune, {
                replyToMessage: msg.message_id
            });
        });
    }
});

bot.start();