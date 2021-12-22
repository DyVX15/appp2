const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!message.guild) return;
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send('sa, as, günaydın cevap mesajlarını ayarlamak için; `.cevap-ayarla aç/kapat`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`Başarıyla botun mesajlara cevap vermesini **açtınız.**  | Yetkili: **${message.author.username}**`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`Başarıyla botun mesajlara cevap vermesini **kapattınız.**  | Yetkili: **${message.author.username}**`)
    
  }

}
 
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: [],
  kategori: 'kullanıcı',
  permLevel: 0
};
exports.help = {
  name: 'cevap-ayarla',
  usage: 'cevap-ayarla'
};