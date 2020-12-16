const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pronax Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:hypequad:775416596457193493> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Cevap Ekle__`,`<a:B_Discord:775416596986331168> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:B_Discord:775416596986331168> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<a:B_Discord:775416596986331168> \`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<a:hypequad:775416596457193493> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<a:hypequad:775416596457193493> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypequad:775416596457193493> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
