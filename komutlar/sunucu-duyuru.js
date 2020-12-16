const Discord = require('discord.js');
//nokkel
 exports.run = (client, message, args) => {//nokkel
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypequad:775416596457193493>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
//nokkel
   let question = args.join(' ');

   let user = message.author.username//nokkel

    const embedd = new Discord.MessageEmbed()//nokkel

     .setDescription(`Yazı Yazman Gerek`);//nokkel
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));//nokkel

     const nokkelduyuru = new Discord.MessageEmbed()//nokkel

       .setColor("#0000cc")
       .setThumbnail(client.user.avatarURL)//nokkel
       .setTimestamp()
       .setFooter('Pronax', client.user.avatarURL)//nokkel

       .addField(`**Pronax | Duyuru**`, `**${question}**`)//nokkel
   //nokkel
     message.channel.send(nokkelduyuru).then(function(message) {

       });//nokkel

     };//nokkel

     exports.config = {//nokkel
     name: 'duyuru',//nokkel
     aliases: ['duyuru-yap']//nokkel
};//nokkel
//nokkel
