const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('847378669722796032') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "${prefix}";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('black')
       .setTitle(`**Electus Kullanıcı Menüsüne Hoşgeldin** `)
        .setDescription(`	
	**<a:zil:853659816786133022>  Prefixim \`\`\.\`\`\


  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}rozetler**  Discord Bot Discord Aldıgınız Rozetleri Komutla Görürsün.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}profil**   Discord Bot Size Özel Profil Ayarlar.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}avatar**  Discord Bot Sizin Avatarınızı Yansıtır.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}istatistik**  Discord Botumuzun İstatistiklerini Bakarsınız.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}rolbilgi**  Etiketlediginiz Bir Rolü Bot Bilgilerini Gösterir.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}yetkilerim**  Discord Bot Size Yetkilerinizi Gösterir.


▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\

**<:rehbericon:858402091252318268> ${ayarlar.prefix}davet __Botu Davet Edebilirsiniz!__**

**<:rehbericon:858402091252318268> ${ayarlar.prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz__



`)
        .setThumbnail(message.author.avatarURL())
        .setImage("https://cdn.discordapp.com/attachments/856132679848951808/859892669928701982/standard_11.gif")
        .addField(`» Electus Bot Bağlantıları`, ` <a:alevtac:853659326871109673>[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=856202290079858708&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/GmtuTWmBfm) **|**<a:alevtac:853659326871109673>`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};