const { SlashCommandBuilder, Routes, version } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { botId, serverId, token } = require("../config.json");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Reply pong!"),
  new SlashCommandBuilder().setName("hello").setDescription("How are you bro?"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

const deployCommands = async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(botId, serverId), {
      body: commands,
    });
    console.log("Commands deployed successfully");
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
};

deployCommands();