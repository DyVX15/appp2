const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
            
    let yazı=[
      `Hayal Edemeyecek Kadar Muhteşem Birisin. :flushed:`,
      `Sen Dünyanın En Güzel Hazinesisin. :sweat_smile:`,
      `Çok Ama Çok Güzelsin. :grimacing:`,
      `Kat Kat Baklavalara Sahip Geniş Omuzlu Yakışıklı BodyBuilder Bir Vücuta Sahip Aşırı Kaslı Birisin. :nerd:`,
      `Annen İle Babanın En Büyük Pişmanlığısın. :smirk:`,
      `Ahlaklı Birisininn. :innocent:`,
      `Hayatta Hiçbir Amacı Olmayan Boş Birisinn. :triumph:`,

    ]
    message.reply(

new Discord.MessageEmbed()
        .setDescription(`${yazı[Math.floor(Math.random() * 7)]} <@${message.author.id}>.`)
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
  name: 'kimim',
  description: '.',
  usage: 'kimim',
   
};