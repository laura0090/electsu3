const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const WlifonWorld = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  const WlifonCode = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTimestamp()
    .addField("<a:developer:859483454613487616>»**Botun Sahibi**", "<@853274521184370699>")
    .addField("<:rules:858402036047151144> »**Botun Pingi**","Ping: {ping2} ms"
            .replace("{ping2}", client.ws.ping),true)
    .addField("<:rules:858402036047151144> »**Bellek Kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<:rules:858402036047151144> »**Çalışma Süresi**", WlifonWorld, true)
    .addField("<:rules:858402036047151144> »**Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<:rules:858402036047151144> »**Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<:rules:858402036047151144> »**Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<:rules:858402036047151144> »**Discord.JS Sürüm**", "v" + Discord.version, true)
    .addField("<:rules:858402036047151144> »**Node.JS Sürüm**", `${process.version}`, true)
    .addField("<:rules:858402036047151144> »**CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,false)
    .addField("<:rules:858402036047151144> »**Bit**", `\`${os.arch()}\``, true)
    .addField("<:rules:858402036047151144> »**İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("<:rules:858402036047151144> »**toplamkomutsayısı**", `\`\`${client.commands.size}\`\``, true)
    .setFooter("© 2021 Electus", client.user.avatarURL())
    .setImage("https://cdn.discordapp.com/attachments/856132679848951808/859892669928701982/standard_11.gif")
    .addField("<a:alevtac:853659326871109673>**» Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)")
  return message.channel.send(WlifonCode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};