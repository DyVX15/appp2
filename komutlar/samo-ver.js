const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json") 
const db = require('quick.db');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

  if (message.author.id != ayarlar.sahip) {
    return message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Samoya özel komut samo haricinde kullanılamaz.`)
        .setColor("RANDOM"));
  }

  let nesne = args[0];
  if (!nesne) return message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Kendi ID'ni girer misin Samo Başkan?`)
        .setColor("RANDOM"));
  message.channel.send(

      new Discord.MessageEmbed()
        .setDescription(`Samo aktif edildi.`)
        .setColor("RANDOM"));

db.set(`samooo_${nesne}`, "acik")
};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'samover',
 description: 'samover',
 usage: 'samover'
};