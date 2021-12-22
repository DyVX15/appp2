const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {

let YetkiliRol = message.guild.roles.cache.find(x => x.id == '823965028460789791')
if (!message.member.roles.cache.has("815073031034241034"))
if (!message.member.roles.cache.has("815073034205134899"))
return message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Bu komutu sadece ${YetkiliRol} rolüne sahip kişiler kullanabilir.`)
        .setColor("RANDOM"));

				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

var u = message.mentions.users.first() || message.author;
  const user = message.mentions.users.first() || message.author;
  if (!user)
    return message.channel.send(
      new Discord.MessageEmbed()
     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
        .setDescription("Lütfen birisini etiketler misin?")
    );

  let erkek = db.get(`erkekpuan_${message.guild.id}_${user.id}`);
  let kız = db.get(`kadınpuan_${message.guild.id}_${user.id}`);

  message.channel.send(
new Discord.MessageEmbed()

     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
.setThumbnail(u.displayAvatarURL())
        .setDescription(`${user} Adlı Yetkili'nin Kayıt İstatistikleri:\n\nToplam Erkek Kayıt Sayısı: **${erkek || "0"}**\nToplam Kız Kayıt Sayısı: **${kız || "0"}**`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["kayıtistatistik", "ki"]
};

exports.help = {
  name: "admin-istatistik",
description: "Yetkililer hakkında bilgi verir.",
type: "Yapılandırma"
};