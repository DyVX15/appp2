const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimkadınRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.RichEmbed()
                            .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
                       .setDescription(`Kız rolü zaten ayarlanmamış bu yüzden kapatamazsın.`) 
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimkadınRol.${message.guild.id}`)

    const embed = new Discord.RichEmbed()
     .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
    .setDescription(`Kız rolü başarıyla verilerden silindi.`)
    .setTimestamp()

     return message.channel.send(embed)

};

exports.conf = {
  kategori: 'Ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kız-rol-kapat',
 description: 'Kız Rol Kapat.',
 usage: 'kız-rol-kapat'
};
