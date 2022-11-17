const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const personalBot = new Client({ intents: GatewayIntentBits.Guilds });

personalBot.once("ready", () => {
  console.log("Personal Bot is Online.");
});

personalBot.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand) return;
  const { commandName } = interaction;
  if (commandName === "ping") {
    await interaction.reply("I do not want to play!");
  }
  if (commandName === "hello") {
    await interaction.reply("Hello world!");
  }
});

personalBot.login(token);