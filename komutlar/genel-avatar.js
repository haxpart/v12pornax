const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let nokkel = message.mentions.users.first() || message.author
 let adana = new Discord.MessageEmbed()
  .addField(`Nokkel Avatar Sistem`)
  .setImage(nokkel.avatarURL())
  
  message.channel.send(adana)
  
  };
exports.config = {
name: "avatar",
aliases: [""]
}