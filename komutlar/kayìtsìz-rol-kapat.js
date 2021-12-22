const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimkayıtsızRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
                       .setDescription(`Kayıtsız rolü zaten ayarlanmamış bu yüzden kapatamazsın.`) 
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimkayıtsızRol.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Kayıtsız rolü başarıyla verilerden silindi.`)
    .setTimestamp()

     return message.channel.send(embed)

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ["kayıtsızrolkapat"],
 permLevel: 0
};

exports.help = {
 name: 'isim-kayıtsız-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};