const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0])

let GoldRol = message.guild.roles.cache.find(x => x.id == '856192616223997983')

let YetkiliRol = message.guild.roles.cache.find(x => x.id == '815073031034241034')
if (!message.member.roles.cache.has("815073031034241034"))//KURUCU ROL
return message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Bu komutu sadece ${YetkiliRol} kullanabilir.`)
        .setColor("RANDOM"));

let user = message.mentions.users.first()

  let nesne = args[0]
  if (!nesne) return message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`GOLD Üyeliği alınacak kişinin ID girer misin?`)
        .setColor("RANDOM"));

let Sebep = args.slice(1).join(' ')
if (Sebep.length < 1) return message.channel.send(

      new Discord.MessageEmbed()
        .setDescription(`GOLD Üyeliğin alınma sebebini girer misin?`)
        .setColor("RANDOM"));

  message.channel.send(

      new Discord.MessageEmbed()
        .setDescription(`<@${nesne}>, GOLD Üyeliğinin süresi bittiği için rolün ve avantajların iptal edildi.`)
        .setColor("RANDOM"));
if (message.client.users.cache.get(''+nesne+'').send(

      new Discord.MessageEmbed()
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        .setTitle("Sohbet Yuvası | GOLD Üyelik")
        .setURL('https://tooblek.com')
        .setDescription(`Tekrardan selam <@${nesne}>. Sohbet Yuvası sunucumuzda GOLD Üyeliğin iptal edildi.\n\nGOLD Üyeliğini İptal Eden Kişi: <@${message.author.id}>\n**Sebep:** \`${Sebep}\``)
.setColor("RANDOM")
)){
} else return
db.delete(`golduyelik_${nesne}`)

uye.roles.remove(GoldRol)

}

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'goldal',
 description: 'goldal',
 usage: 'goldal'
};