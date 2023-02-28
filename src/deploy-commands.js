const { SlashCommandBuilder, Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')
const { botId, serverId, token } = require('../config.json')
const cowsay = require('cowsay')

const commands = [
  new SlashCommandBuilder()
    .setName('hola')
    .setDescription('Devuelve un mensaje random'),
  new SlashCommandBuilder()
    .setName('image')
    .setDescription('Devuelve una imagen random'),
].map((command) => command.toJSON())

const rest = new REST({ version: '10' }).setToken(token)

const deployCommands = async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(botId, serverId), {
      body: commands,
    })
    console.log(
      cowsay.say({
        text: 'Comandos cargados correctamente',
      })
    )
  } catch (error) {
    console.error(`Something went wrong: ${error}`)
  }
}

deployCommands()
