const express =require("express")
// const client = require("pg")
const app = express()
// the function is write in the controller, we need to import the file location 
const methodOverride = require('./middlewares/override_method')
// const port =8080
const port =process.env.PORT || 8080

const session = require("express-session")


const expressLayouts = require('express-ejs-layouts');

// const {Pool} = require("pg")
// const {Client} = require("pg")
// const client = new Client({
// const db = new Pool({

//     database:"goodfoodhunting"
// })
app.set("view engine", "ejs")

app.use(express.static("public"))

const logger = require("./middlewares/logger")
const dishController=require('./controllers/dish_controller')
const viewHelpers=require("./middlewares/view_helpers")

const sessionController=require('./controllers/session_controller')
app.use (logger)
app.use(express.urlencoded({extended: true}))// middleware to parse the body

app.use(expressLayouts);
app.use(express.static("public"))


//module filed outside and use require to import and at file side use module.exports to export the file
app.use(methodOverride)
// adds a session object to the request
app.use(
    session({

    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    })
)

//i want currentuser to be available in all my views
app.use ("/",require("./middlewares/setCurrentUser"))




app.use(viewHelpers)

app.use("/",sessionController)
// app.use(ensureLoggedIn)
app.use("/",dishController)


app.listen(port, () =>{

    console.log(`listening on port ${port}`)
})


// app.use("/", require("./controllers/dish_controller"))


// app.get("/", (req,res)=>{

//     res.send("goodfood")
// })

// client.connect()

// app.get("/", (req,res)=>{

//     const sql = "select * from dishes;"

//     db.query(sql, (err, dbRes) =>{
//         // console.log(dbRes.rows)
//         const dishes = dbRes.rows
//         res.render("home", {dishes: dishes})
//     })
// })

// app.get("/dishes/:id", (req, res) =>{

    

//     const sql = `select * from dishes where id = ${req.params.id};`

//     db.query(sql, (err,dbRes) => {
//         if (err){
//             console.log(err)

//         }else {
//         const dish = dbRes.rows[0]
//         res.render("dishesDetail", {dish})
//         }
//     })


// })

// app.get('/share',(req,res)=>{

//     res.render("new_dish")
// })

// app.post("/share_dish", (req, res)=>{
//     // console.log(req.body)
//     const sql = `insert into dishes (title, image_url) values ('${req.body.title}', '${req.body.image_url}');`

//     db.query(sql, (err, dbRes)=>{

//         res.redirect("/")
//     })

// })
// app.put('/update_dish',(req, res)=>{

//     const sql = `update dishes set title = '${req.body.title}', image_url = '${req.body.image_url}' where id = ${req.body.dish_id};` 

//     db.query(sql, ( err, dbRes)=>{
//         res.redirect(`/dishes/${req.body.dish_id}`)

//     })

// })

// app.get('/edit_dish/:dish_id', (req,res)=>{
// //fetch the record for this dish
// //so i can use it in the form in the template

//     const sql = `select * from dishes where id = ${req.params.dish_id} ;`

//     db.query(sql,(err, dbRes)=>{
//     if (err){

//         console.log(err)
//     }else {
//         const dish = dbRes.rows[0]
//     res.render("edit_dish",{dish: dish})
//     }

// })
// })

// // app.get("update_dish",(req, res))

// // app.get("/delete_dish/:dish_id", (req, res)=>{
// //     console.log(req.params.dish_id)

// //     const sql = `delete from dishes where id = ${req.params.dish_id};`;

// //     db.query(sql, (err, dbRes) => {

// //         res.redirect("/")
// //     })
   
// // })

// app.delete("/delete_dish/:dish_id", (req, res) => {
//     // console.log(req.body.dish_id)
//     const sql = `delete from dishes where id =${req.body.dish_id};`

//     db.query(sql, (err, dbRes)=> {

//         res.redirect("/")
//     })

// })

// // app.get("/delete_dish/:dish_id", (req, res)=>{
// //     console.log(req.query.dish_id)

// //     const sql = `delete from dishes where id = ${req.query.dish_id};`;

// //     db.query(sql, (err, dbRes) => {

// //         res.redirect("/")
// //     })
   
// // })

