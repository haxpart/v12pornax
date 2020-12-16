const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffd100")
.setAuthor(`Pronax Linkler`, client.user.avatarURL())
.setDescription('**• [Pronax`ı Ekleyin.](https://discord.com/oauth2/authorize?client_id=775410167494737970&scope=bot&permissions=805314750)**\n\n**• [Pronax Oy Ver](https://discordbotlist.com/bots/pronax/upvote)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };