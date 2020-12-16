const Discord = require('discord.js');
const request = require('request')
const fynx =require("../ayarlar/bot.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<a:bugra81:783239365701926932>  **Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.**`);

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix //nokkelçalanıngötünekarınca
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:bugra81:783239365701926932> **Doğru kullanım:**   \`${prefix}yavaşmod [0/60000]\``)//nokkelçalanıngötünekarınca
                .setColor("#ffd100")//nokkelçalanıngötünekarınca
            message.channel.send({embed})//nokkelçalanıngötünekarınca
            return
          }
if (limit > 60000) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("**Süre limiti maksimum** **60000** **saniye olabilir.**").setColor("#ffd100"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`<a:bugra81:783239365701926932> **Yazma süre limiti** **${limit}** **saniye olarak ayarlanmıştır**`).setColor("#ffd100"));
var request = require('request');
request({//nokkelçalanıngötünekarınca
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,//nokkelçalanıngötünekarınca
    method: "PATCH",
    json: {//nokkelçalanıngötünekarınca
        rate_limit_per_user: limit
    },//nokkelçalanıngötünekarınca
    headers: {
        "Authorization": `Bot ${client.token}`//nokkelçalanıngötünekarınca
    },
})};//nokkelçalanıngötünekarınca
exports.config = {
name: "yavaşmod",//nokkelçalanıngötünekarınca
aliases: ["slowmode", "yavaşmod"]//nokkelçalanıngötünekarınca
}//nokkelçalanıngötünekarınca