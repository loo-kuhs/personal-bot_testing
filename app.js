const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const msgRandom = require("./src/classes/RandomMessage.js");
const cow = require("./src/classes/Cow.js");

// const spinnerCli = require("./src/utils/spinner-cli");

const personalBot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

personalBot.once("ready", () => {
  console.log(`${personalBot.user.tag} está en linea y escuchando.`);
});

personalBot.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand) return;
  const { commandName } = interaction;
  if (commandName === "hola") {
    await interaction.reply(msgRandom);
  }
});

personalBot.on("messageCreate", (message) => {
  // TODO: Fix the wrapped ascii art in Discord message reply
  if (message.content.startsWith("!vaca")) {
    const text = message.content.slice(5);
    const msg = cow.talk(text);
    message.channel.send(`${msg}`);
  }
});

personalBot.login(token);