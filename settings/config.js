const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = true
global.anti_delete = false

// setting
global.ownername ="Black Store"
global.ownernumber = "6282143349069 , 6283876969731"
global.botname = "Black BotZ"
global.thumbnail = fs.readFileSync("./settings/Ryuu.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'e966d3aac613b61dabd35cc6' //register lolhuman.xyz klo mau apikey
global.zenzkey = '8423e19c13' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
