
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pronax Davet Sistemi`, client.user.avatarURL())
.setDescription(`<a:hypequad:775416596457193493> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Davet Kanal__`,`<a:hypequad:775416596457193493> \`${prefix}davet-kanal\` Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Ayarlar`,true)
.addField(`__Kanal Sıfırla__`,`<a:hypequad:775416596457193493> \`${prefix}davet-kanal-sıfırla\` Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Sıfırlar`,true)
.addField(`__Davet Ekle__`,`<a:hypequad:775416596457193493> \`${prefix}davet-ekle\` Etiketlediğiniz Kişinin Davet Sayısını Arttırır`,true)
.addField(`__Davetlerim__`,`<a:hypequad:775416596457193493> \`${prefix}davetlerim\` Sunucuda Kaç Davetiniz Olduğunu Gösterir`,true)
.addField(`__Davet Rütbe Ekle__`,`<a:hypequad:775416596457193493> \`${prefix}rütbe-ekle\` Sunucunuzda Davet Sayısına Göre Rol Verme Sistemine Rol Ekler`,true)
.addField(`__Rütbe Sil__`,`<a:hypequad:775416596457193493> \`${prefix}rütbe-sil\` Sunucunuzda Davet Sayısına Göre Rol Verme Sisteminden Rol Siler`,true)
.addField(`__Bilgilendirme__`,`<a:hypequad:775416596457193493> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<a:hypequad:775416596457193493> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypequad:775416596457193493> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "davetsistemi",
  aliases: []
}
