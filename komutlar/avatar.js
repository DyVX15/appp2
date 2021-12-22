const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (message.channel.id != '878317254654197770') return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Lütfen avatar komutunu <#878317254654197770> kanalında kullan <@${message.author.id}>.`)).then(msg => msg.delete(5000));

  let embed = new Discord.MessageEmbed().setColor(0x2f3136)
  let victim = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
	let avatar = victim.avatarURL({ dynamic: true, size: 2048 });
	embed.setColor("RANDOM")
  .setAuthor(victim.tag, avatar)
  .setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
	.setDescription(`[Resim Adresi](${avatar})`)
	.setImage(avatar)
	message.channel.send(embed)
  
};

exports.conf = {
  kategori: 'avatar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatar',
 description: 'avatar',
 usage: 'avatar'
};