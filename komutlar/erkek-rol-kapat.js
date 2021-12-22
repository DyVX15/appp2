const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimerkekRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.RichEmbed()
                            .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
                       .setDescription(`Erkek rolü zaten ayarlanmamış bu yüzden kapatamazsın.`) 
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimerkekRol.${message.guild.id}`)

    const embed = new Discord.RichEmbed()
     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Erkek rolü başarıyla verilerden silindi.`)
    .setTimestamp()

     return message.channel.send(embed)

};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'erkek-rol-kapat',
 description: 'Erkek Rol Kapat.',
 usage: 'erkek-rol-kapat'
};
