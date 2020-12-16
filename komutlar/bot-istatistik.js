


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let nokkelbey = new Discord.MessageEmbed()
.setThumbnail()
.addField("__**Bot Verileri**__", `<a:hypequad:775416596457193493> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypequad:775416596457193493> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:750076071721828452> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:hypequad:775416596457193493> **Bot Sahibi**  <@775356233293103144> \n **Nokkel#0657** \n\n <a:hypequad:775416596457193493>\ `)
.addField("__**Sürümler**__", `<a:hypequad:775416596457193493> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypequad:775416596457193493> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypequad:775416596457193493> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:hypequad:775416596457193493> " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setColor("#ffd100")
message.channel.send(nokkelbey)
}

exports.config = {
name: "botbilgi",
aliases: []
}