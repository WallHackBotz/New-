let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

• My God
• My ortu
• Kanna
• Krizyn
• Nurutomo (Author / Creator)
• Xteam
• AlyaaXzy 
• BOTCAHX
• Zeks
• Penyedia Layanan API
• Orang-orang yang Berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
// Jangan di ilangin ya kontol
// kalo di hapus gw teror lu babi!