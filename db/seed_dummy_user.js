const {Client}= require("pg")

const bcrypt = require("bcrypt")

const db=new Client({


    database: "goodfoodhunting"
})

db.connect()
const email = "123@abc.com"

const plainTextPassword = "pudding"

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(plainTextPassword, salt, (err, digestedPassword)=>{

        // console.log(digestedPassword)
        const sql = `insert into users (email, password_digest) values('${email}','${digestedPassword}');`

        db.query(sql,(err, dbRes)=>{


            console.log(err)
            db.end()
        })



    })

})