const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()//nokkelçalanıngötünekarınca
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")//nokkelçalanıngötünekarınca
      .setDescription(
        "**Hatalı kullanım! örnek: ${prefix}rol-koruma aç && kapat**"//nokkelçalanıngötünekarınca
      );

    message.channel.send(embed);//nokkelçalanıngötünekarınca
    return;
  }//nokkelçalanıngötünekarınca
  let rol = await db.fetch(`rolk_${message.guild.id}`);//nokkelçalanıngötünekarınca
  if (args[0] == "aç") {
    if (rol) {//nokkelçalanıngötünekarınca
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")//nokkelçalanıngötünekarınca
        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Görünüşe göre rol koruma zaten aktif!**");//nokkelçalanıngötünekarınca

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");//nokkelçalanıngötünekarınca
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")//nokkelçalanıngötünekarınca
        .setTitle("Rol Koruma sistemi!")//nokkelçalanıngötünekarınca
        .setDescription("**Rol koruma başarıyla açıldı!**");//nokkelçalanıngötünekarınca

      message.channel.send(embed);//nokkelçalanıngötünekarınca
    }//nokkelçalanıngötünekarınca
  } else if (args[0] == "kapat") {//nokkelçalanıngötünekarınca
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()//nokkelçalanıngötünekarınca
      .setColor("BLACK")//nokkelçalanıngötünekarınca
      .setTitle("Rol Koruma sistemi!")
      .setDescription("**Rol Koruma başarıyla kapandı!**");//nokkelçalanıngötünekarınca

    message.channel.send(embed);//nokkelçalanıngötünekarınca
  }
};//nokkelçalanıngötünekarınca
exports.config = {
  name: "rolkoruma",//nokkelçalanıngötünekarınca
  aliases: ["rol-koruma"]//nokkelçalanıngötünekarınca
};
//nokkelçalanıngötünekarınca