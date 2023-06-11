# 03 CLI: Telegram Console Sender

```bash
Link to telegram bot: t.me/Sls_academy_task_bot.
```

#### Rename "example.txt" to the ".env"
#### Add your chatId to .env file

```bash
Note: To get your chatId you can run: "npm run getId" 
and when the app is running send "/start" to the bot chat.
The chatId will be send back to the chat.
```



## Running the app

`node app.js send-message | m <message text>` - to send message to Telegram Bot.

`node app.js send-photo | p <image path>` - Send photo to Telegram Bot. 

Just drag and drop in console after p-flag.

`node app.js --help | -h` - display help for command
