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
                        .setDescription(`Tokat atacağın kişiyi etiketlemelisin <@${message.author.id}>.`)
                        .setColor("RANDOM")
                message.channel.send(Tooblek);
                return
        }

        if(!kullanici.bot == false) {
                const Tooblek = new Discord.MessageEmbed()
                        .setDescription(`Bota tokat atamazsın <@${message.author.id}>.`)
                        .setColor("RANDOM")
                message.channel.send(Tooblek);
                return
        }

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor('')
    .setColor("RANDOM")
    .setImage(`https://cdn.discordapp.com/attachments/855490846563762187/856238491565162516/tenor.gif`)
    .setDescription(`${s}, ${member.user} isimli kişiye tokat attı.`)
    return message.channel.send(embed);

}
};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: ["tokatat", "tokat-at"],
 permLevel: 0
};

exports.help = {
 name: 'tokat',
 description: 'tokat',
 usage: 'tokat'
};
