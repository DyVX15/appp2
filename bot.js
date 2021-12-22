const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {

  // Oynuyor Kısmı
  
      var actvs = [
        `☕ SOHBET YUVASI FAMILY ☕samoo`,
        `☕ SOHBET YUVASI FAMILY ☕samoo`, 
        `☕ SOHBET YUVASI FAMILY ☕samoo`
    ];
    
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'WATCHING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'WATCHING'});
    }, 15000);
    
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

///Cevap-Ayarla
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'sa') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      }
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'sea') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'günaydın') {
        message.channel.send(`Günaydın ${message.member}, Hayırlı Sabahlar.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'gunaydin') {
        message.channel.send(`Günaydın ${message.member}, Hayırlı Sabahlar.`);
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'gunaydın') {
        message.channel.send(`Günaydın ${message.member}, Hayırlı Sabahlar.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'güno') {
        message.channel.send(`Günaydın ${message.member}, Hayırlı Sabahlar.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'günaydın arkadaşlar') {
        message.channel.send(`Günaydın ${message.member}, Hayırlı Sabahlar.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'iyi geceler') {
        message.channel.send(`İyi geceler ${message.member}, Allah rahatlık versin.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'ii geceler') {
        message.channel.send(`İyi geceler ${message.member}, Allah rahatlık versin.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'iyi geçeler') {
        message.channel.send(`İyi geceler ${message.member}, Allah rahatlık versin.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === ' herkese iyi geceler') {
        message.channel.send(`İyi geceler ${message.member}, Allah rahatlık versin.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'ii gclr') {
        message.channel.send(`İyi geceler ${message.member}, Allah rahatlık versin.`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'slm') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'selam') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'selamun aleyküm') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'selamın aleyküm') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'selamun aleykum') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });
client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'selamin aleykum') {
        message.channel.send(`https://media.discordapp.net/attachments/855901632641761290/888032204226179092/standard_13.gif?width=421&height=54`);
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'mekanın sahibi') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`**Gerçek dostlar menfaatleri bitene kadar değil yürekleri yetene kadar sizi sevenlerdir. ${client.emojis.cache.get('822245858681684039')} ${client.emojis.cache.get('821414120926347264')}\n\n-SAMOO**`)
        .setImage("https://media.discordapp.net/attachments/855898712471896075/855942743271276595/20210502_172115.jpg?width=472&height=472")
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'adamm') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`**Sözünü tartmadan söyleyen, aldığı cevaptan incinmesin. ${client.emojis.cache.get('821346302683250748')} ${client.emojis.cache.get('821323360809386014')}\n\n-SAMOO**`)
        .setImage("https://media.discordapp.net/attachments/855898712471896075/855945413920030770/IMG_20171219_153434_589.jpg?width=472&height=472")
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'kraliçe') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Kaybettiklerimi Belki Özlerim Ama Vazgeçtikletimin Hiç Şansı Yok. ${client.emojis.cache.get('852705577003122731')}`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'caner') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`ʜᴀɴɪ ᴅᴇʀʟᴇʀ ʏᴀ ʙɪʀ ᴋᴏɴᴜşᴜʀsᴀᴍ ʏᴇʀ ʏᴇʀɪɴᴅᴇɴ ᴏʏɴᴀʀ ᴅɪʏᴇ. ʙᴇɴ ᴏɴʟᴀʀᴅᴀɴ ᴅᴇɢ̆ɪʟɪᴍ. ᴋᴏɴᴜşᴜʀsᴀᴍ ᴅᴇʀɪɴᴅᴇɴ ᴋɪᴍsᴇ ᴋᴀʟᴋᴀᴍᴀᴢ ʏᴇʀɪɴᴅᴇɴ.
:coffee:𝙎𝙊𝙃𝘽𝙀𝙏 𝙔𝙐𝙑𝘼𝙎𝙄 𝙁𝘼𝙈𝙄𝙇𝙔:coffee: ${client.emojis.cache.get('821421336161157131')}  ${client.emojis.cache.get('821421336161157131')} ${client.emojis.cache.get('821323360809386014')} ${client.emojis.cache.get('821323360809386014')}`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'biz neyiz') {
        message.channel.send(

new Discord.MessageEmbed()
        .setImage(`https://cdn.discordapp.com/attachments/855901632641761290/856609782928375858/poster_1624301760860.jpg`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'tag') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`İşte Tagımız: ༄° Ⓢ Ⓨ•\nTag avantajlarınına <#842907086450851870> kanalından erişebilirsin ${message.member}.`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'samo') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Firari saatlerin ardından gelen isyankâr sokakların tövbekâr evlatlarıyız diye her haksızlığa tahammül edecek halimiz yoktur. ${client.emojis.cache.get('852839442451267604')} ${client.emojis.cache.get('821324962127282216')} ${client.emojis.cache.get('821414120926347264')} ${client.emojis.cache.get('852844281907511306')}\n\n:coffee:SOHBET YUVASI FAMİLY:coffee:\n-SAMOO`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'sohbet yuvası') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`Dostluk Unutulmayacak Kadar Güzel, Ender İnsanlarla Yaşanacak Kadar Özeldir.

SOHBET YUVASI 
SAMOO`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'burak') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`ᴀʏᴀᴋᴛᴀʏıᴍ ɪşᴛᴇ ʜᴇʀᴋᴇsᴇ ɪɴᴀᴛ. ᴋʀᴀʟı ᴅᴀ ɢᴇʟsᴇ ʙᴏᴢᴜʟᴍᴀᴢ ʙᴜ sᴀʟᴛᴀɴᴀᴛ. ʜᴀᴛᴜɴ ᴅᴀ ʙᴇɴɪᴍ ᴋᴀɴᴜɴ ᴅᴀ ᴏ ᴋᴀᴅᴀʀ!

𝙎𝙊𝙃𝘽𝙀𝙏 𝙔𝙐𝙑𝘼𝙎𝙄
        𝘽𝙐𝙍𝘼𝙆`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'mekan sahibi burak') {
        message.channel.send(

new Discord.MessageEmbed()
        .setDescription(`ᴄ̧ᴏᴋ ʏᴜ̈ᴋsᴇɢ̆ᴇ ᴄ̧ıᴋᴀᴍᴀᴍ ʙᴇɴᴅᴇ ʏᴜ̈ᴋsᴇᴋʟɪᴋ ᴋᴏʀᴋᴜsᴜ ᴠᴀʀ. ᴋɪᴍsᴇʏɪ ʏᴀʀı ʏᴏʟᴅᴀ ʙıʀᴀᴋᴀᴍᴀᴍ ʙᴇɴᴅᴇ “ᴀʟᴄ̧ᴀᴋʟıᴋ” ᴋᴏʀᴋᴜsᴜ ᴠᴀʀ.

𝙎𝙊𝙃𝘽𝙀𝙏 𝙔𝙐𝙑𝘼𝙎𝙄
𝘽𝙐𝙍𝘼𝙆`)
        .setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'havaifisek') {
        message.channel.send(

new Discord.MessageEmbed()
.setImage(`https://cdn.discordapp.com/attachments/731171053669187664/863036153456492594/havaifisk.gif`)
.setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'havaifişek') {
        message.channel.send(
new Discord.MessageEmbed()
.setImage(`https://cdn.discordapp.com/attachments/731171053669187664/863036153456492594/havaifisk.gif`)
.setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'davet') {
        message.channel.send('https://discord.gg/XMaNHss4bv ***Degerli sohbet yuvası ailesi davet linkimiz sevdiklerinizi davet edebilirsiniz daha güzel ve kaliteli bir ortam seçecek olursan Sohbet yuvası tek adres iyi sohbetler.***\n```sohbet yuvası Family samoo```'+ `${client.emojis.cache.get('821346205907943425')}${client.emojis.cache.get('821323066726154252')}${client.emojis.cache.get('821414120926347264')}`)
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'link') {
        message.channel.send('https://discord.gg/XMaNHss4bv ***Degerli sohbet yuvası ailesi davet linkimiz sevdiklerinizi davet edebilirsiniz daha güzel ve kaliteli bir ortam seçecek olursan Sohbet yuvası tek adres iyi sohbetler.***\n```sohbet yuvası Family samoo```'+ `${client.emojis.cache.get('821346205907943425')}${client.emojis.cache.get('821323066726154252')}${client.emojis.cache.get('821414120926347264')}`)
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'davet bağlantısı') {
        message.channel.send('https://discord.gg/XMaNHss4bv ***Degerli sohbet yuvası ailesi davet linkimiz sevdiklerinizi davet edebilirsiniz daha güzel ve kaliteli bir ortam seçecek olursan Sohbet yuvası tek adres iyi sohbetler.***\n```sohbet yuvası Family samoo```'+ `${client.emojis.cache.get('821346205907943425')}${client.emojis.cache.get('821323066726154252')}${client.emojis.cache.get('821414120926347264')}`)
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'dua') {
        message.channel.send(

new Discord.MessageEmbed()
.setImage(`https://cdn.discordapp.com/attachments/731171053669187664/861218936228937728/islam-allah.gif`)
.setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'sohbet yuvası') {
        message.channel.send(

new Discord.MessageEmbed()
.setImage(`https://cdn.discordapp.com/attachments/855901632641761290/864254183452442654/standard.gif`)
.setColor("RANDOM"));
      } 
      }
    });

client.on('message', async (message, member, guild) => {
const db = require('quick.db');
if(!message.guild) return;
  let i = await  db.fetch(`saas_${message.guild.id}`)
      if(i === 'açık') {
        if (message.content.toLowerCase() === 'dostluk') {
        message.channel.send(

new Discord.MessageEmbed()
.setImage(`https://cdn.discordapp.com/attachments/855901632641761290/864257861008490496/standard_1.gif`)
.setColor("RANDOM"));
      } 
      }
    });

///Cevap-Ayarla

////Kayıt Sistemi
client.on('guildMemberAdd', async (member, guild, message) => {

      let kayıtsız = await db.fetch(`isimkayıtsızRol.${member.guild.id}`)
      if (!kayıtsız || kayıtsız.toLowerCase() === 'yok') return;
     else {
      try {
                    member.roles.add(member.guild.roles.cache.get(kayıtsız))
                           } catch (e) {
      console.log(e)
     }}});
////Kayıt Sistemi

//GOLD
client.on("message", async message => {
var u = message.mentions.users.first() || message.author;
  const request = require("node-superfetch");
  const db = require('quick.db');
  let i = await db.fetch(`golduyelik_${message.member.id}`);
  let dakdest = await db.fetch(`golddddd_${message.member.id}`);
  let timeout = 6000000;
  const ms = require("parse-ms");
  if (i == "acik") {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (message.member.bot) return;

      if (message.content.length > 1) {
        db.set(`golddddd_${message.author.id}`, Date.now());
        const btk = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setImage("https://cdn.discordapp.com/attachments/731171053669187664/856204199548026940/GOLD.gif")
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`**${client.emojis.cache.get('856209261616955404')} Sohbet Yuvası'nın GOLD Üyesi Belirlendi. ${client.emojis.cache.get('856209261616955404')}**\n\Sohbet Yuvası'nın GOLD Üyesi olan <@${message.author.id}> mesaj attı gerçekten çok havalısın.`);

        message.channel.send(btk).then(msg => msg.delete({ timeout: 15000, reason: 'Yapılması gerekiyordu.' }));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});
//GOLD

//SAMO
client.on("message", async message => {
var u = message.mentions.users.first() || message.author;
  const request = require("node-superfetch");
  let i = await db.fetch(`samooo_${message.member.id}`);
  let dakdest = await db.fetch(`samooooooo_${message.member.id}`);
  let timeout = 1800000;
  const ms = require("parse-ms");
  if (i == "acik") {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (message.member.bot) return;
 
      if (message.content.length > 1) {
        db.set(`samooooooo_${message.author.id}`, Date.now());
        const btk = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setImage("https://cdn.discordapp.com/attachments/731171053669187664/856264122970406912/Cizgii.gif")
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(`**${client.emojis.cache.get('822924789467054134')} Mekanın Sahibi SAMOO Geldi. ${client.emojis.cache.get('822924767791022100')}**\n\Sohbet Yuvası'nın baş tacı olan <@${message.author.id}> mesaj attı. ${client.emojis.cache.get('856209261616955404')}`);

        message.channel.send(btk).then(msg => msg.delete({ timeout: 15000, reason: 'Yapılması gerekiyordu.' }));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});
//SAMO

/////7/24 Ses
client.on('ready', ()=>{
client.channels.cache.get('857297041180196955').join()
})
/////7/24 Ses

client.login(ayarlar.token);
