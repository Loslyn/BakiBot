const Discord = require('discord.js');
const client = new Discord.Client();
var bot = new Discord.Client();
var prefix = "b!";

bot.on("ready", function() {
    bot.user.SetGame("BakiBot, b!help");
    console.log("Le bot est bien connecté");
});

client.login('NTQyMTE5NzIwMDc0MzQ2NDk2.DzpbKQ.Gy-N8eGHSTTvgutAU0Uop5K2rVE');

client.on('message', message => {
    if (message.content === prefix + "connection"){
      message.channel.sendMessage('Je suis opperationnel ! :smile:');
      console.log('répond connection');
    }
  });


  client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
    .setDescription(':tada: **' + member.user.username + '** Bienvenue a toi jeune combattant :smile:')
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('542118781246242837').send(embed)

  });

  client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
    .setDescription(':cry: **' + member.user.username + '** est mort, on a perdu un combattant :cry:')
    .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('542118781246242837').send(embed)

  });

  client.on('message', message => {
    if (message.content === prefix + "workshop"){
      message.reply('__Voici la collection du serveur__ **Baki RP** : https://steamcommunity.com/workshop/filedetails/?id=1645351490');
      console.log('répond workshop');
    }
  });
