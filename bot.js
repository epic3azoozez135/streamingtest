const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "a!"



client.on('message', function(message) {
    const myID = "511491524077420555";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('???? ?????? ???? ??????.');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "s")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('???? ?????? ???? ??????.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!??**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "p")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('???? ?????? ???? ??????.');
        client.user.setGame(args);
        message.channel.send('**Playing,Done!??**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "l")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('???? ?????? ???? ??????.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Listening,Done!??**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "w")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('???? ?????? ???? ??????.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Watching,Done!??**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('???? ?????? ???? ??????.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.login(process.env.BOT_TOKEN); 
