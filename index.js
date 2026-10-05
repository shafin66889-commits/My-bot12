const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'Fbr80Official-UnU2.aternos.me', // এখানে তোমার Aternos Server IP বসাও
    port: 61014,                         // এখানে Server Port বসাও
    username: 'MyGamingBt'               // বটের নাম
  });

  bot.on('spawn', () => {
    console.log('Bot logged in!');
  });

  bot.on('end', () => {
    console.log('Bot left. Reconnecting in 5 seconds...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', err => console.log('Error:', err));
}

startBot();
