const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {

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
                        .setDescription(`Aşk ölçeri kullanmak için birisini etiketlemelisin <@${message.author.id}>.`)
                        .setColor("RANDOM")
                message.channel.send(Tooblek);
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 100)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
        var yorum = `Sizi evlendirelim <3`
        if(anasonuc < 80) {
                var yorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
        }
        if(anasonuc < 60) {
                var yorum = 'Eh biraz biraz bir şeyler var gibi.'
        }
        if(anasonuc < 40) {
                var yorum = 'Azıcıkta olsa bir şeyler hissediyor sana :)'
        }
        if(anasonuc < 20) {
                var yorum = 'Bu iş olmaz sen bunu unut.'
        }
        const Tooblek = new Discord.MessageEmbed()
                .setDescription(`**${s} | ${member.user}**\n\Aşk Yüzdesi: **${anasonuc}**\n${kalp}${akalp}\n\n${yorum}`)
                .setImage("https://cdn.discordapp.com/attachments/855490846563762187/856230421549547540/giphy.gif")
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send(Tooblek);

}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
  permLevel: 0
};

exports.help = {
  name: 'aşkölçer',
  description: 'aşkölçer',
  usage: 'aşkölçer',
};