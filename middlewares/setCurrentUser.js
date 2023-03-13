const db= require("./../db")

function  setCurrentUser(req, res, next){

    // res.locals.currentUser = {name: "Dt"}

    const {userId} = req.session

    res.locals.currentUser = {}
    
    if(userId){

        // const {userId} = req.session
        const sql = `select id, email from users where id =${userId};`
        db.query(sql, (err, dbRes)=>{

            if(err){

                console.log(err)
            }else {
                res.locals.currentUser=dbRes.rows[0]
                next()
            }
        })
        
       
    }else {
        next()
    }

}
module.exports = setCurrentUser