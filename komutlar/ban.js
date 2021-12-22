const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`Yetkin yeterli değil!`))
		
    let user = args[0];

    if (!user) {
        return message.channel.send(new MessageEmbed().setDescription(`Kullanıcı ID hatalı veya kullanıcı yasaklı değil!`))
    }
    message.guild.members.ban(user);
    message.channel.send(new MessageEmbed().setDescription(`SAMOO HAVA YOLLARI İYİ UÇUŞLAR DİLER. ✈️✈️`))
};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'ban',
 description: 'ban',
 usage: 'ban'
};