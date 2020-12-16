
 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pronax Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`<a:hypequad:775416596457193493> Pronax botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç__`,`<a:tamr:775416597220294729> \`${prefix}sayaç\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:tamr:775416597220294729> \`${prefix}otorol\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:tamr:775416597220294729> \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:tamr:775416597220294729> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:tamr:775416597220294729> \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:tamr:775416597220294729> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:tamr:775416597220294729> \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:tamr:775416597220294729> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:tamr:775416597220294729> \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:tamr:775416597220294729> \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:tamr:775416597220294729> \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:tamr:775416597220294729> \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:tamr:775416597220294729> \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:tamr:775416597220294729> \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Yasaklı Tag__`,`<a:tamr:775416597220294729> \`${prefix}yasaklı-tag\` Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`<a:hypequad:775416596457193493> \`${prefix}davet\` | Pronax'ı Sunucunuza Davet Edersiniz\n<a:hypequad:775416596457193493> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypequad:775416596457193493> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media.discordapp.net/attachments/776381928734851092/776451355392868362/standard_22.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}
