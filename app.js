const { Client, GatewayIntentBits, hyperlink } = require('discord.js')
const { token } = require('./config.json')
const msgRandom = require('./src/classes/RandomMessage.js')
const cow = require('./src/classes/Cow.js')
const imageRnd = require('./src/classes/RandomImage.js')

const personalBot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

personalBot.once('ready', () => {
  console.log(`${personalBot.user.tag} está en linea y escuchando.`)
})

personalBot.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand) return
  const { commandName } = interaction
  if (commandName === 'hola') {
    await interaction.reply(msgRandom)
  }

  // TODO: Fix the attachment from random image api
  if (commandName === 'image') {
    const image = await imageRnd.getRandomImage()
    const link = hyperlink('imagen', image)

    await interaction.reply(`Aquí tienes una ${link} aleatoria.`)
  }
})

personalBot.on('messageCreate', async (message) => {
  if (message.content.startsWith('!vaca')) {
    const text = message.content.slice(5)
    const msg = cow.talk(text)
    message.channel.send(`${msg}`)
  }

  // TODO: Fix the attachment from image api
  if (message.content.startsWith('!image')) {
    const id = message.content.slice(7)
    const image = await imageRnd.getImageById(id)
    const link = hyperlink('imagen', image)

    message.channel
      .send(`Aquí tienes la ${link} con el id ${id} que buscabas.`)
      .then(console.log(`Image sent: ${image}`))
      .catch(console.error)
  }
})

personalBot.login(token)
