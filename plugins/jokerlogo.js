let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Dalam Proses...*')
  let res = `https://api-invibot.herokuapp.com/api/textpro/joker-logo?text=Revita&apikey=APIKEY`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['jokerlogo'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(jokerlogo)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
