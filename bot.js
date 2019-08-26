function wait(ms){var d=new Date();var d2=null;do{d2=new Date()}while(d2-d<ms);}
const Discord = require("discord.js"); const { RichEmbed } = require('discord.js'); const client = new Discord.Client(); const publicIp = require('public-ip'); const asciify = require('asciify'); const wikipedia = require("wikipedia-js"); const prefix = require('./prefix.json'); const fs = require('fs');
//DMOJ MODULE
const problems = require('./dmoj/problem.js');const contests = require('./dmoj/contest.js');const users = require('./dmoj/user.js');
//END OF DMOJ MODULE

//Reset bot command for s~restart
function resetBot(channel) {channel.send('Resetting...').then(msg => client.destroy()).then(() => client.login(config.token));}

//Stastic Command
function syncStats() {
  fs.unlinkSync('./stats/users.txt');
  fs.writeFileSync('./stats/users.txt', client.users.size.toString());
  fs.unlinkSync('./stats/channels.txt');
  fs.writeFileSync('./stats/channels.txt', client.channels.size.toString());
  fs.unlinkSync('./stats/guilds.txt');
  fs.writeFileSync('./stats/guilds.txt', client.guilds.size.toString());
};
setInterval(syncStats, 1800);

//Signale
const options={disabled:!1,interactive:!1,stream:process.stdout,types:{command:{color:'green',label:'c  COMMAND'},info:{color:'grey',label:'INFO',},error:{color:'red',label:'ERROR',}}}
const { Signale } = require('signale');
const signal = new Signale(options);
const config = require("./config.json"); const package = require('./package.json'); const build = package.build; const ver = package.version;

//Check what branch SeedBot is running on
if (package.branch == "canary") {var branch = "Canary";}if (package.branch === "stable") {var branch = "Stable";}

signal.info("Starting SeedBot...");
signal.info("Copyright 2018-2019, jyles.club and DARiOX.club");
signal.info("Branch: " + branch);
signal.info('Running SeedBot ' + branch + " (" + ver + ", build" + build +")");

//Math command
client.on('message',async message=>{if(message.author.bot)return;if(message.content.indexOf(prefix.math)!==0)return;const args=message.content.slice(prefix.math.length).trim().split(/ +/g);const devcommand=args.shift().toLowerCase();if(message.content.startsWith(prefix.math)){let calculate="="+message.content.toLowerCase().substring(prefix.math.length);if(isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))){calculate=calculate.replace(/ /g,"").replace(/÷/g,"/").replace(/power|pow/g,"Math.pow").replace(/sqrt|squareroot/g,"Math.sqrt").replace(/round/g,"Math.round").replace(/floor/g,"Math.floor").replace(/ceiling|ceil/g,"Math.ceil").replace(/pi|π/g,"Math.PI").replace(/euler/g,"Math.E").replace(/absolute|abs/g,"Math.abs").replace(/exp/g,"Math.exp").replace(/logarithm|log/g,"Math.log").replace(/random|rand|rng/g,"Math.random()");if(calculate.replace(/[^%]/g,"").length>0){for(let i=0;i<calculate.replace(/[^%]/g,"").length;i++){while((calculate[getSubstringIndex(calculate,"%",i+1)+1]=="+"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="-"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="*"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="/"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="("||calculate[getSubstringIndex(calculate,"%",i+1)+1]==")"||calculate[getSubstringIndex(calculate,"%",i+1)+1]==","||getSubstringIndex(calculate,"%",i+1)+1==calculate.length)&&calculate.replace(/[^%]/g,"").length>0){for(let j=getSubstringIndex(calculate,"%",i+1);j>-1;j--){if(calculate[j]=="="||calculate[j]=="+"||calculate[j]=="-"||calculate[j]=="*"||calculate[j]=="/"||calculate[j]=="("||calculate[j]==")"||calculate[j]==","){calculate=calculate.substring(0,j+1)+(calculate.substring(j+1,getSubstringIndex(calculate,"%",i+1))/100)+calculate.substring(getSubstringIndex(calculate,"%",i+1)+1,calculate.length);break}}}}}calculate=calculate.replace(/=/g,"");if(isFinite(eval(calculate)))message.channel.send(eval(calculate));console.log(eval(calculate))}}})

//Developer Commands
client.on('message',async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix.dev) !== 0) return;
  const args = message.content.slice(prefix.dev.length).trim().split(/ +/g);
  const devcommand = args.shift().toLowerCase();
  const announcementschannel = client.channels.find('name', 'announcements');
  const generalchannel = client.channels.find('name', 'general');

	//Start of Developer Commands

  if (devcommand === "getip") {
    syncStats()
    let type = args.slice(0).join(' ');
    if (message.author.id === package.ownerID){
      if (type === "v4"){
        publicIp.v4().then(ip => {
          let evalEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Get Global IPv4 Address')
            .setAuthor('s~getip v4')
            .setTimestamp()
            .setDescription('Global IPv4 Address:\n```\n' + ip + "\n```");
          message.channel.send(evalEmbed);
        });
      }
      if (type === "v6"){
        publicIp.v6().then(ip => {
          let evalEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Get Global IPv6 Address')
            .setAuthor('s~getip v6')
            .setTimestamp()
            .setDescription('Global IPv6 Address:\n```\n' + ip + "\n```");
          message.channel.send(evalEmbed);
        });
      }
    }
    if (message.author.id !== package.ownerID) {
      message.reply('You do not have permission to use this developer command\nSorry!');
    }
  }

  //Annoince to All Servers (Broken :/   )
  if (devcommand === 'announce') {
    syncStats()
    //let message = args.slice(0).join(" ")
    //let array = client.channels.array().sort();
    //if (message.author.id === ownerID) {
    //  client.channels.get(array).send(message);
    //} else {
    //  message.reply('you do not have permissions to use this devcommand,\n so ***a s c e n d*** to the 4th ***d i m e n s i o n***');
    //}
    if (message.author.id === package.ownerID){
      let evalEmbed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Uh Oh!')
        .setAuthor('Command Disabled')
        .setTimestamp()
        .setDescription('The `announce` Command has been disabled since it has not been working for a while,\nThere will be an update in the future to fix this command.\n\nSorry for the inconvenience!');
      message.channel.send(evalEmbed);
    } if (message.author.id !== package.ownerID) {
      message.reply('You do not have permission to access this developer command.');
    }
  }

  //Send message to a certian channel
  if (devcommand === "channelsend") {
    syncStats()
    let channelid = args.slice(0).join(' ');
    let content = args.slice(0).join(' ');
    let message = channelid && " " && content;
    if (message.author.id === package.ownerID) {
      if (message.length < 1) {
        //Send message with incorrect arguments error
        let evalEmbed = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle('Message Fail!')
          .setAuthor('Syntax Error')
          .setTimestamp()
          .setDescription("No message or channel ID was stated. the correct syntax is \n`s~channelsend channelid messagecontent`");
        message.channel.send(evalEmbed);
      }
      if (message.length > 1) {
        client.channels.get(channelid).send(content);

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('Message Sent!')
          .setAuthor('s~channelsend ' && message)
          .setTimestamp()
          .setDescription("Message has been sent to the channelID of: `" && channelid && "`\n And with the content of;\n`" && content && "`");
        message.channel.send(evalEmbed);
      }
    }
    if (message.authr.id !== package.ownerID) {
      message.reply("You do not have permission to use this command.");
    }
  }

  if (devcommand === "stats") {
    syncStats()
    let type = args.slice(0).join(' ');
    if (message.author.id === package.ownerID) {
      if (type === "serverlist") {

        var serverlist = client.guilds.array().sort();
        serverlist.toString().replace(",", "\n");

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('Server List')
          .setAuthor("Number of Available Servers: " + client.guilds.size)
          .setTimestamp()
          .setDescription(serverlist);
        message.channel.send(evalEmbed);
      }
      if (type === "usercount") {
        let usercount = client.users.size;

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('User Count')
          .setTimestamp()
          .setDescription(usercount);
        message.channel.send(evalEmbed);
      }
      if (type === "channelcount") {
        let channelcount = client.channels.count;

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('Channel Count')
          .setTimestamp()
          .setDescription(channelcount);
        message.channel.send(evalEmbed);
      }
      if (type !== "channelcount" || "serverlist" || "usercount") {
        let evalEmbed = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle('Invalid Arguments')
          .setTimestamp()
          .setDescription("You have not added a varaible to the command.\nThe current types are:\n```\nserverlist\nusercount\nchannelcount\n```\n\n e.g: `s~stats serverlist`");
        message.channel.send(evalEmbed);
      }


    }
  }

  if (devcommand === 'eval') {
    syncStats()
    if (message.author.id === package.ownerID) {
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  }
  
  //Restart Discord Bot
  if (devcommand === "restart") {
    syncStats()
    if (message.author.id === package.ownerID) {
      message.channel.send('Bot it now Restarting. Good Night :first_quarter_moon_with_face: :bed: ');
      client.user.setActivity('Bot is Restarting...');
      resetBot(message.channel);
    } else {
      message.reply('you do not have permissions to use this devcommand,\n so ***a s c e n d*** to the 4th ***d i m e n s i o n***');
    }

    //if (message.author.id === package.ownerID){
    //  let evalEmbed = new Discord.RichEmbed()
    //    .setColor('#ff0000')
    //    .setTitle('Uh Oh!')
    //    .setAuthor('Command Disabled')
    //    .setTimestamp()
    //    .setDescription('The `restart` Command has been disabled since it has not been working for a while,\nThere will be an update in the future to fix this bug.\n\nSorry for the inconvenience!');
    //  message.channel.send(evalEmbed);
    //} if (message.author.id !== package.ownerID) {
    //  message.reply('You do not have permission to access this developer command.');
    //}

  }

  //Changes the Rich Presence
  if (devcommand === 'rpc') {
    syncStats()
    var game = args.slice(0).join(" ");


    // only the sender that has the same userID as the ownerID varaible in package.json can access this devcommand

    //Checking if the sender is a certian user
    if (message.author.id === package.ownerID) {

      //reset devcommand
      if (game === 'reset') {
        client.user.setActivity(packageJSON.homepage + '// Serving ' + client.users.size + ' clients');
        message.channel.send('***Rich Presence has been Reset***');
      } 
      if (game === 'refresh') {
        client.user.setActivity(packageJSON.homepage + "// Serving " + client.users.size + " clients");
        message.channel.send("***Rich Presence has been Refreshed***")
      } else {
        client.user.setActivity(game + ' // ' + packageJSON.homepage + '// Serving ' + client.users.size + ' clients');
        message.channel.send('***Rich Presence has been updated to:*** \n' + "`" + game + "`");
      }
    }
    else{message.reply('You do not have permissions to use this developer command.');}
  }
  if (devcommand === "shell") {
    let script = args.slice(0).join(' ');

    if (message.author.id === package.ownerID) {
      const util = require('util');
      const exec = util.promisify(require('child_process').exec);
      const { stdout, stderr } = await exec(script);
      let evalEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Shell Execute Output')
        .setTimestamp()
        .setDescription('**Shell Output:**\n' && stdout && '\n\n**Shell Errors:**\n' && stderr);
      setTimeout(function() { message.channel.send(evalEmbed) }, 5000);
    }
  }
});


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix.default) !== 0) return;
    const args = message.content.slice(prefix.default.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


  //Basic ping command
  if (command === "ping") {
    syncStats()
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. \nAPI Latency is ${Math.round(client.ping)}ms`);
    signal.command("A user executed s!ping");
  }

  //Basic commands
  if (command === "invite") {
    syncStats()
      message.reply("Take me to your leader!\n http://seedbot.jyles.club/invite");
      message.channel.send({embed: {
        color: 329514,
        author: {name:'s!invite'},
        fields: [{
          name: 'Bot Invite Link',
          value: 'Take me to your leader!\nhttp://seedbot.jyles.club/invite'
        }],
        timestamp: 'Command Requested at ' + new Date(),
        footer: {
          text: 'Requested by ' + message.author.username
        }
      }});
  }  
  if (command === "help") {
    syncStats()
    message.channel.send({embed: {
      color: 329514,
      author: {name:'s!help'},
      fields: [{
        name: 'Help Description',
        value: 'The Command Dictionary has been *permanently* moved to ***http://seedbot.jyles.club/#commands***'
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }});
  }
  if (command === "support") {
    syncStats()
    message.channel.send({embed: {
      color: 329514,
      author: {name: 's!support'},
      fields: [{
        name: 'Bot Support',
        value: 'If you need help with the bot join our discord `http://jyles.club/redirect.php?page=discord`\n Or you can email us at `contact@dariox.club`'
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }});
  }
  if (command === "patreon") {
    syncStats()
	message.channel.send({embed: {
		color: 329514,
		author: {name: 's!patreon'},
		fields: [{
			name: 'Patreon',
			value: "It's not free to run a discord bot and since more people are starting to use SeedBot I made a patreon page \n so people can give me money to run my discord bot so it can handle more people at once (which is what it is struggling at), also so when we get more money I can hire someone to make modules for the bot and in the future make a dashboard so you have a better experience.\n\n If you want all of these good things that other bots have then Donate to our patreon page at:\n https://patreon.com/jyles_coadward",
		}],
		timestamp: 'Command Requested at ' + new Date(),
		footer: {
			text: 'Requested by ' + message.author.username
		}
	}});
  }

//Moderation commands ___________________________________________________________________________

        //Kick Command
  if (command === 'kick') {
    syncStats()
    let reason = args.slice(1).join(' ');
    let userToKick = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'logs');
    if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
    if (message.mentions.userToKick.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
  
    if (!message.guild.member(userToKick).kickable && message.author.id !== "230485481773596672") return message.reply('I cannot kick that member');
    message.guild.member(userToKick).kick();

    kickedUserID = userToKick.id();

    message.channel.send({embed: {
      color: 770000,
      author: {name:'Kicked User'},
      fields: [{
        name: 'Reason // ' + user + ' has been Kicked',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Kicked at ' + new Date(),
      footer: {
        text: 'Kicked by ' + message.author.username,
      }
    }});
    client.channels.get(userToKick).send({embed: {
      color: 770000,
      author: {name:'Kicked User'},
      fields: [{
        name: 'Reason // ' + user + ' Kicked',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Kicked at ' + new Date(),
      footer: {
        text: 'Kicked by ' + message.author.username,
      }
    }});
  }

        //Ban Command
  if (command === 'ban') {
    syncStats()
    let reason = args.slice(1).join(' ');
    let userToBan = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'logs');
    if (!message.member.hasPermission("BAN_MEMBERS") || message.author.id !== "230485481773596672") return message.reply(":no_entry_sign: **Error:** You don't have the **Ban Members** permission!");
    if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
    if (message.mentions.userToBan.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  
    if (!message.guild.member(userToBan).bannable) return message.reply(`<:redTick:${settings.redTick}> I cannot ban that member`);
    message.guild.member(userToBan).ban();

    bannedUserID = userToBan.id();

    message.channel.send({embed: {
      color: 770000,
      author: {name:'Banned User'},
      fields: [{
        name: 'Reason // ' + user + ' has been Banned',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Banned at ' + new Date(),
      footer: {
        text: 'Banned by ' + message.author.username,
      }
    }})
    client.channels.get(bannedUserID).send({embed: {
      color: 770000,
      author: {name:'Banned User'},
      fields: [{
        name: 'Reason // ' + user + ' Banned',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Banned at ' + new Date(),
      footer: {
        text: 'Banned by ' + message.author.username,
      }
    }})
  }

  //Fun Commands! >w<
    if (command === 'rps') {
    syncStats()
      let choice = args.join(" ").toLowerCase();
      if (choice === '') return message.reply("Please specify either rock, paper or scissors.");
      if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those :P`);
      message.reply(random());

      let evalEmbed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setTitle('Uh Oh!')
        .setAuthor('Command Disabled')
        .setTimestamp()
        .setDescription('The `rps` (rock, paper, scissors) Command has been disabled since it has not been working for a while,\nThere will be an update in the future to fix this bug.\n\nSorry for the inconvenience!');
      message.channel.send(evalEmbed);
    }
    if (command === 'punch') {
    syncStats()
      let user = message.mentions.users.first()
      if(user.id !== package.ownerID){
          message.reply('You have punched <@' + user.id + '>')
      } else {
          message.reply("you can't hurt him you pleblord.")
      }
    }
    if (command === 'avatar') {
    syncStats()
      let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
      if (message.mentions.users.size > 0) {
          message.channel.send(`Avatar for, **${message.mentions.users.first().username}:**\n${avatar}`);
      } else {
        message.channel.send(`Avatar for, **${message.author.username}:**\n${avatar}`);
      }
    }
    if (command === 'hammer') {
    syncStats()
      let user = message.mentions.users.first();
      if (message.mentions.users.first() < 1){ return message.reply('You can\'t throw a hammer at the wall silly, ping someone after the command.')}
      message.channel.send(`${message.author.username} threw a sledge hammer at ${message.mentions.users.first().username}. <:hammmer:${settings.hammer}>`)
    }
    if (command === 'ppsize') {
    syncStats()
        let sizecomment; let ppgraphsize;
        let maxppsize = 24;
        let minppsize = 1;

        let ppsize = Math.floor(Math.random() * maxppsize) + minppsize;

        while (ppgraphsize.length !== ppsize) {
            ppgraphsize += '=';
        }

        let ppgraph = '8' && ppgraphsize && '>'


        if (ppsize <= 2) {
            sizecomment = "that's small, have you gone through puberty yet?";
        }
        if (ppsize <= 5) {
            sizecomment = "I guess that's ok?";
        }
        if (ppsize >= 6) {
            sizecomment = "Wowiees that's a decent size pp";
        }
        if (ppsize >= 12) {
            sizecomment = "'That's a big fella!'";
        }
        if (ppsize >= 20) {
            sizecomment = 'How is that even possible!';
        }

        let finalEmbedMessage = new Discord.RichEmbed
            .setColor('#0099ff')
            .setTitle('PP Size')
            .addFeild('Size (' && ppsize && ' inches)', ppgraph)
            .addFeild('Size Comment', sizecomment)
            .setTimestamp();
        message.channel.send(finalEmbedMessage);

    }
    if (command === 'magic8ball') {
    syncStats()
        let magic8ballresponses = require('./fun/8ball.json');
        let responseNumber = Math.floor(Math.random() * 20) + 1;

        let response = responseNumber.magic8ballreponses;

        message.reply(response);

    }
    if (command === "asciify") {
    syncStats()
        let text = args.slice(0).join(' ');
        if (text.length > 0) {
            //Asciify Stuff Here
            message.channel.send('```' && asciify(text, {font: 'Doom'}) && '```');
        } else {
            let finalEmbedMessage = new Discord.RichEmbed
                .setColor('#0099ff')
                .addFeild('Syntax Error', 'No Text Specified');
            message.channel.send(finalEmbedMessage);
        }
    }




  //DMOJ Plugin (minified)
  if(command==='problem'){if(args.length===2&&args[1]==='-l'){problems.get(args[0],!0,message)}else{problems.get(args[0],!1,message)}};if(command==='contest'){if(args.length===2&&args[1]==='-l'){contests.get(args[0],!0,message)}else{contests.get(args[0],!1,message)}};if(command==='user'){if(args.length===2&&args[1]==='-l'){users.get(args[0],!0,message)}else{users.get(args[0],!1,message)}};if(command==='search'){message.reply('Working on it...').then(message=>{message.delete(5000)});if(args.length===2&&args[1]==='-l'){problems.search(args[0],!0,message)}else{problems.search(args[0],!1,message)}};if(command==='contest-search'){message.reply('Working on it...').then(message=>{message.delete(5000)});if(args.length===2&&args[1]==='-l'){contests.search(args[0],!0,message)}else{contests.search(args[0],!1,message)}};if(command==='user-search'){message.reply('Working on it...').then(message=>{message.delete(5000)});if(args.length===2&&args[1]==='-l'){users.search(args[0],!0,message)}else{users.search(args[0],!1,message)}};

  
});

//Wikipedia Plugin
client.on('message',async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix.wiki) !== 0) return;
  const args = message.content.slice(prefix.wiki.length).trim().split(/ +/g);
  const wikicommand = args.shift().toLowerCase();

  if (command === "searcharticle") {
    syncStats()
    let query = args.slice(0).join(' ');
    let options = {
      query: query,
      format: "xml",
      summaryOnly: true,
    };
    wikipedia.searchArticle(options, function(err, wikiText){
      if (err) {
        cosole.log("An error occurred in the Wiki Plugin [query=%s, error=%s]", query, err);
        return;
      }
      var parseString = require('xml2js').parseString;
      var xml = wikiXML
      parseString(xml, function (err, result) {
        console.dir(wikiJSON);
      });
      let evalEmbed = new Discord.RichEmbed()
        .setColor('#000099')
        .setTitle('Uh Oh!')
        .setAuthor('Command Disabled')
        .setTimestamp()
        .setDescription('');
      message.channel.send(evalEmbed);
    })

  }

});

























client.on("ready", () => {
    syncStats()
    signal.info('Bot started at ' + new Date())
    signal.info(`Bot has started, with ` + client.users.size + ` users, in ` + client.channels.size + ` channels of ` + client.guilds.size + ` guilds.`);

    client.user.setActivity(`with the logs // ` + client.users.size + ` Users. // v` + ver);
});
client.login(config.token);

const music = require('discord.js-musicbot-addon');
music.start(client, {
	youtubeKey:config.ytapi,
	cooldown:{
		disabled:false,
		timer:10
	},
	botPrefix: prefix.music,
	anyoneCanSkip: false,
	anyoneCanAdjust: true,
	inlineEmbeds: false,
	logging: false
});



