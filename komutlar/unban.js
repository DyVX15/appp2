const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`Kullanıcı ID hatalı veya kullanıcı yasaklı değil!`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`Ban başarıyla kaldırıldı!`))
};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'unban',
 description: 'unban',
 usage: 'unban'
};