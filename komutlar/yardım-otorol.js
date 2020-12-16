const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pronax Oto Rol Komutları`, client.user.avatarURL())
.setDescription(`<a:hypequad:775416596457193493> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Rol Ayarla__`,`<a:guvenl_tk:775416602564886578> \`${prefix}otorol-ayarla\` Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<a:guvenl_tk:775416602564886578> \`${prefix}otorol-kapat\` Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<a:guvenl_tk:775416602564886578> \`${prefix}otorol-mesaj\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`<a:guvenl_tk:775416602564886578> \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:hypequad:775416596457193493> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<a:hypequad:775416596457193493> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypequad:775416596457193493> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol",
  aliases: []
}
