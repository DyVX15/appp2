const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async (client, message, args) => {


let kullanici = message.mentions.users.first()

    if (talkedRecently.has(message.author.id)) {
            message.channel.send(

    new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Çok hızlısın lütfen 5 saniye bekle <@${message.author.id}>.`)).then(msg => msg.delete({ timeout: 8000, reason: 'Yapılması gerekiyordu.' }));
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const Tooblek = new Discord.MessageEmbed()
                        .setDescription(`Öpeceğin kişiyi etiketlemelisin <@${message.author.id}>.`)
                        .setColor("RANDOM")
                message.channel.send(Tooblek);
                return
        }

        if(!kullanici.bot == false) {
                const Tooblek = new Discord.MessageEmbed()
                        .setDescription(`Botu öpemezsin <@${message.author.id}>.`)
                        .setColor("RANDOM")
                message.channel.send(Tooblek);
                return
        }

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor('')
    .setColor("RANDOM")
    .setImage(`https://cdn.discordapp.com/attachments/731171053669187664/857294677408612362/37f9f27715e7dec6f2f4b7d63ad1af13.gif`)
    .setDescription(`${s}, ${member.user} isimli kişiyi öptü.`)
    return message.channel.send(embed);

}
};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'öp',
 description: 'öp',
 usage: 'öp'
};
