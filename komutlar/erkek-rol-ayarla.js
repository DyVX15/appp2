const Berat = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
            if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    const hata = new Berat.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Rol belirtmeniz gerekiyor. \n\n**Örnek Kullanım:** \n\`\`\`${prefix}erkek-rol-ayarla [Rol Etiket]\`\`\``) 
    .setTimestamp()
    return message.channel.send(hata)
      
  }

  db.set(`isimerkekRol.${message.guild.id}`, rol.id)
  const embed = new Berat.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
  .setDescription(`İsim kayıt sisteminde kullanılacak olan **Erkek** Rolü: <@&${rol.id}> olarak seçildi.`)
  .setTimestamp()

   return message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};


exports.help = {
  name: 'erkek-rol-ayarla',
  description: 'Erkek Rol Ayarlar.',
  usage: 'erkek-rol-ayarla',
};
