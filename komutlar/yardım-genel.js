  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pronax Genel Komutlar`, client.user.avatarURL())
.setDescription(`<:partner:775416601746866217> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<:partner:775416601746866217> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<:partner:775416601746866217> \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<:partner:775416601746866217> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`<:partner:775416601746866217> \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`<:partner:775416601746866217> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<:partner:775416601746866217> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<:partner:775416601746866217> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<:partner:775416601746866217> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<:partner:775416601746866217> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <:partner:775416601746866217> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
