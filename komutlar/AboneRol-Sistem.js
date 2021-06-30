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
       .setTitle(`**Electus Otorol Sistemi Menüsüne Hoşgeldin** `)
        .setDescription(`	
	**<a:zil:853659816786133022>  Prefixim \`\`\.\`\`\


  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}abone**  Youtubunuza Abone Olan Kişiye Abone Rol Verir.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}abone-yetkili**  Abone Rölünü Verecek Kişinin AboneRol Yetkilisini Ayarlar.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}abonerol**  Abone Olan Kişiye Verilecek Rölü Ayarlama.

  ** <a:maviyldz:853659864525307904>  ${ayarlar.prefix}abonelog**  Abone Rölü Verecek Kişinin Verdigi Mesaj Logu Ayarlarsın


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
  aliases: ['abonerol-sistem'],
  permLevel: 0,
};

exports.help = {
  name: 'abonerol-sistem',
  description: 'a!davet-sistemi Menüsü',
  usage: 'abonerol-sistem'
};