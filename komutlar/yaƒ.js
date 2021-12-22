const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
            
    let yazı=[
      `Ayağı Sakat numarası yapıp zabıtalara yakalanınca iki ayakla dört nala koşan 40 yaşındaki dilenci gibsin :hot_face:`,
      `65 yaşında sokağa çıkma yasağı var diyince bastonla polisleri kovalayan bir dedesin :scream:`,
      `23 Yaşında Altına Pisliyen :grimacing:`,
      `43 yaşında taş devrine girdiniz safra böbrek ve mesane başladı demektir :rolling_eyes:`,
      `22 yaşında takviye basmaya çalışırken yanlışlıkla sunucudan ayrılan güzel bir kardeşimizsin :smile:`,
      `50 yaşında olgun adam gibi adamsın ama fazla havalanma :smile:`,
      `Ağam olasan Ömer Paşam olasan Ömer şarkısını söylerken göğsüne ağda yapan 26 yaşındaki adam sensin:smile:`,
      `30 yaşında 5 bankadan kredi çeken hovardanın birisin senden bir halt olmaz :smile:`,
      `Öretmenim bögün canlı ders yokmu diyen 7 yaşındaki çocuk sensin :zany_face:`,
      `28 yaşında berberdeyken ellerine sağlık çok güzel olmuş diyip dışarı çıkınca küfür eden bir insansın :rofl:`
    ]
    message.reply(

new Discord.MessageEmbed()
        .setDescription(`${yazı[Math.floor(Math.random() * 10)]} <@${message.author.id}>.`)
        .setColor("RANDOM"));


    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'yaş',
  description: '.',
  usage: 'yaş',
   
};