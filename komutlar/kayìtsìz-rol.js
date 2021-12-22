const Berat = require('discord.js')
const sarac = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
      let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

   let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol) {
    const hata = new Berat.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Rol belirtmeniz gerekiyor. \n\n**Örnek Kullanım:** \n\`\`\`${prefix}isim-kayıtsız-rol [Rol Etiket]\`\`\``) 
    .setTimestamp()
    return message.channel.send(hata)
      }

  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
    sarac.set(`kayıtisim.${message.guild.id}`, isim)
  let otorol = await sarac.set(`isimkayıtsızRol.${message.guild.id}`, newRole)
  if (!message.guild.roles.cache.get(newRole)){
    const hata = new Berat.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olun.`) 
    .setTimestamp()
    return message.channel.send(hata)
      }

const embed = new Berat.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
.setDescription(`İsim kayıt sisteminde kullanılacak olan **Kayıtsız** Rolü: <@&${newRole}> olarak seçildi.`)
.setTimestamp()

 return message.channel.send(embed)

};
  
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['isimkayıtsız','isimkayıtsızrole','isimkayıtsızrol','isim-kayıtsız-rol'],
    permLevel: 0
}

exports.help = {
    name: 'isim-kayıtsız-role',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'teyit-kayıtsız-rol'
}
