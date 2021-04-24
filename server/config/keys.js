if(process.env.NODE_ENV === 'production') {
    module.exports = require('./host');
} else {
    module.exports = require('./local');
}

//dev: mongodb+srv://dbBenjaminRoomieDev:lklzjb0MVXlVrv0b@roomie-dev.d93pw.mongodb.net/roomiedb?retryWrites=true&w=majority
//Prod: mongodb+srv://dbBenjaminRoomieProd:ScXMVbY8Fm1UXv2l@roomie-prod.8hwq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

/*
dev google:
client: 591061883785-8475705uq9cni6r9v23o57l8g7h2aoki.apps.googleusercontent.com
secret: q7C0AQbaNF3SANJ3-hbh2-mu
*/

/*
prod google:
client: 1077170065302-glol1ahgqrd0834qtg4j6m537hjtjbd6.apps.googleusercontent.com
secret: NnsxsTAmppDtp3eM00QiMaHS
*/