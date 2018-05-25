const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = '+'

bot.login(process.env.TOKEN)

bot.on("ready", function () {
    console.log('################################');
    console.log('### Starting the application ###');
    console.log('################################');
    //bot.user.setActivity("Prefix: " + prefix);
    console.log("# Siren Guild fetch est Online!#");
    console.log('################################');
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'guilds') ) {
    let args = message.content.split(' ')
    let user = bot.users.get(args[1])
    if (user != null) {
        let stringguildid = ''
        bot.guilds.forEach(function(guild) {
            guild.members.forEach(function(member) {
                if (member.id == user.id) {
                    stringguildid += '**' + guild.name + "**" + ": " + guild.id + "\n"
                }
            })
        });
        message.channel.send('__'+'Common servers with ' + user.username + ':\n\n'+'__' + stringguildid)
    }
    else{
        message.channel.send('User not found :smirk:')
    }
  }

  if (message.content== prefix + 'list') {
        let stringguildid = ''
        bot.guilds.forEach(function(guild) {
            stringguildid += '**' + guild.name + "** : " + guild.id + "\n" 
        });
        message.channel.send('__'+'List of my servers:\n\n' +'__' + stringguildid)
    }
})
bot.on('message', message => {
    if (message.content == prefix + 'helpGuild') {
    message.channel.send('**Help:** To search a server in common with a user just type +guilds *[USER ID]*\nTo have a list of all my servers type +list :D\nTo have the name and owner id of a server, type +owner *[Guild ID*]\nYou can also have all the channels of a server by typing +channels *[Guild ID]*' )
    message.channel.send('**All this is to allow you send messages through the bot to someone/somewhere it is but you are not. Use +send to send your message.**\n Type `+h +send` to have more informations about the use of +send command.')
  }
})
bot.on('message', message => {
    if (message.content == prefix + 'helpguild') {
    message.channel.send('**Help:** To search a server in common with a user just type +guilds *[USER ID]*\nTo have a list of all my servers type +list :D\nTo have the name and owner id of a server, type +owner *[Guild ID]\nYou can also have all the channels of a server by typing +channels *[Guild ID]*' )
    message.channel.send('**All this is to allow you send messages through the bot to someone/somewhere it is but you are not. Use +send to send your message.**\n Type `+h +send` to have more informations about the use of +send command.')
  }
})

bot.on('message', message => {
    if (message.content == prefix + 'helpg') {
    message.channel.send('**Help:** To search a server in common with a user just type +guilds *[USER ID]*\nTo have a list of all my servers type +list :D\nTo have the name and owner id of a server, type +owner *[Guild ID]*\nYou can also have all the channels of a server by typing +channels *[Guild ID]*' )
    message.channel.send('**All this is to allow you send messages through the bot to someone/somewhere it is but you are not. Use +send to send your message.**\n Type `+h +send` to have more informations about the use of +send command.')
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'owner') ) {  
    let args = message.content.split(' ')
    let guild = bot.guilds.get(args[1])
    if (guild != null) {
        let owner = bot.users.get(guild.ownerID)
        message.channel.send('The owner of this server is: **' + owner.tag + '** , ' + owner.id)
    }
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'channels') ) {  
    let args = message.content.split(' ')
    let guild = bot.guilds.get(args[1])
    if (guild != null) {
        let stringchannel = ''
        guild.channels.forEach(function(channel) {
            if (channel.type == 'text') {
                stringchannel += '**' + channel.name + "**" + ": " + channel.id + "\n"
            }
        })
        message.channel.send('__'+'Here is a list of all the channels of this server:\n\n' +'__' + stringchannel)
    }
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'pat') ) {  
    let args = message.content.split(' ')
    var msg = ''
    if (args[1] != null)
    {
        msg += args[1]
    }
    let random = Math.floor(Math.random() * (14 - 1 +1)) + 1
    message.channel.send(msg + '\n', {
            files: [{
            attachment: './res/pat/pat'+random+'.gif',
            name: 'pat'+random+'.gif'
            }]
    })
    .then(console.log('successpat'))
    .catch(console.error)
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'hug') ) {  
    let args = message.content.split(' ')
    var msg = ''
    if (args[1] != null)
    {
        msg += args[1]
    }
    let random = Math.floor(Math.random() * (10 - 1 +1)) + 1
    message.channel.send(msg + '\n', {
            files: [{
            attachment: './res/hug/hug'+random+'.gif',
            name: 'hug'+random+'.gif'
            }]
    })
    .then(console.log('successhug'))
    .catch(console.error)
  }
})

bot.on('message', message => {
  if (message.content == prefix + 'food') {
    let random = Math.floor(Math.random() * (41 - 1 +1)) + 1
    message.channel.send('', {
            files: [{
            attachment: './res/food/food'+random+'.jpg',
            name: 'food'+random+'.jpg'
            }]
    })
    .then(console.log('successfood'))
    .catch(console.error)
  }
})


bot.on('message', message => {
  if (message.content.startsWith(prefix + 'nom') ) {  
    let args = message.content.split(' ')
    var msg = ''
    if (args[1] != null)
    {
        msg += args[1]
    }
    let random = Math.floor(Math.random() * (10 - 1 +1)) + 1
    message.channel.send(msg + '\n', {
            files: [{
            attachment: './res/nom/nom'+random+'.gif',
            name: 'nom'+random+'.gif'
            }]
    })
    .then(console.log('successnom'))
    .catch(console.error)
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'slap') ) {  
    let args = message.content.split(' ')
    var msg = ''
    if (args[1] != null)
    {
        msg += args[1]
    }
    let random = Math.floor(Math.random() * (10 - 1 +1)) + 1
    message.channel.send(msg + '\n', {
            files: [{
            attachment: './res/slap/slap'+random+'.gif',
            name: 'slap'+random+'.gif'
            }]
    })
    .then(console.log('successslap'))
    .catch(console.error)
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'kiss') ) {  
    let args = message.content.split(' ')
    var msg = ''
    if (args[1] != null)
    {
        msg += args[1]
    }
    let random = Math.floor(Math.random() * (12 - 1 +1)) + 1
    message.channel.send(msg + '\n', {
            files: [{
            attachment: './res/kiss/kiss'+random+'.gif',
            name: 'kiss'+random+'.gif'
            }]
    })
    .then(console.log('successkiss'))
    .catch(console.error)
  }
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + 'cry') ) {  
    let args = message.content.split(' ')
    var msg = ''
    if (args[1] != null)
    {
        msg += args[1]
    }
    let random = Math.floor(Math.random() * (13 - 1 +1)) + 1
    message.channel.send(msg + '\n', {
            files: [{
            attachment: './res/cry/cry'+random+'.gif',
            name: 'kiss'+random+'.gif'
            }]
    })
    .then(console.log('successcry'))
    .catch(console.error)
  }
})


bot.on('message', message => {
    if (message.content.startsWith(prefix + 'search')) {
    	let args = message.content.split(' ')
    	if (args[1] != null) {
    		bot.guilds.forEach(function(guild) {
        		guild.members.forEach(function(member){
        			if(member.user.tag == args[1]){
        				message.channel.send('Id of ' + args[1] +' :' + member.user.id + '\n His Servers: '+ guild.name +': '+ guild.id)
        			}
        		})
        	})
    	}
    	else {
    		message.channel.send('Unspecified tag')
    	}
      	
    }
})
