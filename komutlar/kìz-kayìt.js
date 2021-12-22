const Discord = require('discord.js');
const db = require('quick.db')
const ms = require("ms");
exports.run = async(client, message, args) => {

if (message.channel.id != '815073088722567188') return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Bu komutu sadece <#815073088722567188> kanalında kullanabilirsin. <@${message.author.id}>.`))

let YetkiliRol = message.guild.roles.cache.find(x => x.id == '823965028460789791')
              const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  let mutel = await db.fetch(`isimkadınRol.${message.guild.id}`);
  let yetkili = await db.fetch(`isimyetkiliRol.${message.guild.id}`);
  let kayitsiz = await db.fetch(`isimkayıtsızRol.${message.guild.id}`);
  let modlog = await db.fetch(`isimkayıtlog.${message.guild.id}`);

  if (!yetkili) return
  if (!mutel) return
  if(!message.member.roles.cache.has(yetkili)) {
    const hata = new Discord.MessageEmbed()
    .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
    .setDescription(`Bir kullanıcıyı kayıt etmek için ${YetkiliRol} rolüne sahip olmanız gerekiyor.`) 
    .setColor('RANDOM')
    .setTimestamp()
    return message.channel.send(hata)
      }

    let kisi = message.mentions.members.first()
    if (!kisi) {
      const hata = new Discord.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
      .setDescription(`Lütfen bir kullanıcıyı etiketler misin?\n\n**Örnek Kullanım:** \n\`\`\`${prefix}k [Etiket] [Kullanıcı Adı]\`\`\` `) 
      .setColor('RANDOM')
      .setTimestamp()
      return message.channel.send(hata)
        }
    if (kisi.roles.cache.has(mutel)) return message.channel.send(new Discord.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
.setTimestamp()
.setDescription('Bu kişi zaten kayıt oldu. Tekrar kayıt edemezsin.').setColor("RANDOM"));
    let isim = args[1];
    if(!isim){
      const hata = new Discord.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
      .setDescription(`Bahsettiğin kişi için kullanıcı adı girer misin?\n\n**Örnek Kullanım:** \n\`\`\`${prefix}k [Etiket] [Kullanıcı Adı]\`\`\` `) 
      .setColor('RANDOM')
      .setTimestamp()
      return message.channel.send(hata)
        }
    if(isim.length > 12) {
      const hata = new Discord.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
      .setDescription(`Girmiş olduğun kullanıcı adı çok uzun. **Max: 12**\n\n**Örnek Kullanım:** \n\`\`\`${prefix}k [Etiket] [Kullanıcı Adı]\`\`\` `) 
      .setColor('RANDOM')
      .setTimestamp()
      return message.channel.send(hata)
        }

    if (kisi.id === message.author.id) { 
      const hata = new Discord.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
      .setDescription(`Kendini nasıl kayıt etmeyi düşünüyorsun?`) 
      .setColor('RANDOM')
      .setTimestamp()
      return message.channel.send(hata)
        }

    let toplam = await db.fetch(`toplamkayıt.${message.guild.id}_${kisi.id}`);

        const embed22 = new Discord.MessageEmbed()
      .setTitle('Sohbet Yuvası | Kayıt Sistemi')
.setURL('https://tooblek.com')
.setColor('RANDOM')
.setFooter(message.author.username + ' tarafından istendi.', message.author.displayAvatarURL())
  .setDescription(`**${kisi} Kullanıcısına başarıyla <@&${mutel}> rolü verildi.**
  \`\`\`${isim} olarak kayıt edildin.\`\`\`
  `)
    .setFooter(`Kayıt Eden Yetkili: ${message.author.username}`)  
  .setThumbnail(client.user.displayAvatarURL())
  message.channel.send(embed22)
  message.guild.members.cache.get(kisi.id).setNickname(`${isim}`)
    kisi.roles.add(mutel).then(y => y.roles.remove(kayitsiz))

  db.add(`kadınpuan_${message.guild.id}_${message.author.id}`, 1);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kızkayıt',
  description: 'Kız Kayıt rolü verirsiniz.',
  usage: 'kızkayıt',
};