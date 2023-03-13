const {Pool} = require("pg")
// const {Client} = require("pg")
// const client = new Client({

const config={

dev:{

    database: "goodfoodhunting",

},
prod:{

    connetiontString:process.env.DATABASE_URL,
},

}


const db = new Pool(process.env.DATABASE_URL ?  config.prod : config.dev)


// const pool = new Pool({

//     database:"goodfoodhunting"
// })

module.exports = pool