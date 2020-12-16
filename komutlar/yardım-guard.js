 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pronax Koruma Komutları`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:tamr:775416597220294729> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__-KORUMALAR YAPIMDA__`,`<a:tamr:775416597220294729> Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,`<a:tamr:775416597220294729> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<a:tamr:775416597220294729> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:tamr:775416597220294729> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

