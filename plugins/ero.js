const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
        let res = await fetch(global.API('https://api-invibot.herokuapp.com/api/nsfw/ero?apikey=APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '© ʀʀꜱꜱᴢxx ʙᴏᴛ ×͜×'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['ero']
handler.tags = ['anime','premium']
handler.command = /^ero$/i
handler.premium = true
handler.register = true

module.exports = handler
