const { channel } = require('diagnostics_channel')
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)

  const g = client.guilds.cache.get('944807392628076574')

  // PARA DELETAR
  /* const teste = g.channels.cache.map(guild => guild.id)

  teste.forEach(outro => {
    const fetchedChannel = client.channels.cache.get(outro)
    fetchedChannel.delete()
    console.log(outro)
  })*/

  // PARA CRIAR CALL
  for (i = 0; i <= 1000; i++) {
    g.channels
      .create('👹FelipaoGay ' + i + '🌈', {
        type: 'GUILD_TEXT'
      })
      .then(teste => {
        teste.send('<@407928826203471872>')
      })
  }
})

client.login('')
