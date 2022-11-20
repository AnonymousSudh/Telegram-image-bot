const { Telegraf } = require('telegraf');
const axios = require("axios");
require('dotenv').config({ path: './config.env' })
const bot = new Telegraf(process.env.API_KEY)

bot.start((ctx) => {
    ctx.reply('Welcome to this image bot')
    ctx.reply("/photo :- This command will provide a exact photo of that category eg. /photo mountain")
});
bot.command('photo', async(ctx) => {
    ctx.reply("Please wait we are loading your image");
    const photoName = ctx.update.message.text.slice(7).trim()
    await ctx.replyWithPhoto(`https://source.unsplash.com/700x600/?${photoName}`)
 
})

bot.launch();