const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:bugra81:783239365701926932> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:bugra81:783239365701926932>  **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`<a:bugra81:783239365701926932>  **Kayıt Sistemi başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.config = {
  name: 'oto-rol-kapat',
  aliases: ["otorol-kapat", "otorolkapat"]
};
