let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0831-6398-9496]
│ •  [0831-6398-9500]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
