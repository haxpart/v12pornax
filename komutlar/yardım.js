 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pronax Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypequad:775416596457193493> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<:partner:775416601746866217> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:guvenl_tk:775416602564886578> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypequad:775416596457193493> \`${prefix}guard\`  `,true)
.addField(`__Eklenti Komutları__`,`<a:guvenl_tk:775416602564886578> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypequad:775416596457193493> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypequad:775416596457193493> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<a:hypequad:775416596457193493> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypequad:775416596457193493>t \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}