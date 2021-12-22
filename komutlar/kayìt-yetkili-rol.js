const Berat = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
      let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  

   let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol){
    const hata = new Berat.MessageEmbed()
     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Rol belirtmeniz gerekiyor. \n\n**Örnek Kullanım:** \n\`\`\`${prefix}isim-yetkili-rol [Rol Etiket]\`\`\``) 
    .setTimestamp()
    return message.channel.send(hata)
      }

  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
    db.set(`kayıtisim.${message.guild.id}`, isim)
  let otorol = await db.set(`isimyetkiliRol.${message.guild.id}`, newRole)
  if (!message.guild.roles.cache.get(newRole)) {
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
.setDescription(`İsim kayıt sistemin de kullanılacak olan **Yetkili** rolü <@&${newRole}> olarak seçildi.`)
.setTimestamp()

 return message.channel.send(embed)

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['isimyetkilirol','isim-yetkili-rol','isimyetkilirol','isimyetkili'],
    permLevel: 0
}

exports.help = {
    name: 'isim-yetkili-rol',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'teyit-kayıtsız-rol'
}
