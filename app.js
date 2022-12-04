const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const msgRandom = require("./src/functions/random-msg.js");

// const spinnerCli = require("./src/utils/spinner-cli");

const personalBot = new Client({ intents: GatewayIntentBits.Guilds });

personalBot.once("ready", () => {
  console.log(`${personalBot.user.tag} está en linea y escuchando.`);
});


personalBot.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand) return;
  const { commandName } = interaction;
  if (commandName === "ping") {
    await interaction.reply("I do not want to play!");
  }
  if (commandName === "hola") {
    await interaction.reply(msgRandom);
  }
});

personalBot.login(token);
