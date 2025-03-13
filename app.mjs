
import express from "express"
// import schema from "./schema/joi_validation.mjs";
// import mongoose from "mongoose";
import mongoose from "./database/index.mjs"
import userRoutes from "./routes/userRoutes.mjs"

mongoose.connection.on("open", () => {
  console.log("mongodb connected")
})

mongoose.connection.on("error", () => {
  console.log("error in connecting mongodb")
})

const app = express()
const port = 6000
//192.168.2.11:5000
app.use("api", userRoutes)

app.use(express.json()); // Add this line to handle JSON bodies


app.get('/', (req, res) => {

  res.send('Hello World!')

})



//By using postmen check API

//middleware koi bhi req ayegi phle wo ise hokr guzre gi
app.use("/", (req, res, next) => {
  console.log("Request URL", req.url, "method", req.method)
  next()
})

// let users = [] // user data isme store hoga jb postman pr testing hogi agr database ni hoga tu 





//                               //APP.POST:user ki request
//                          //DATA ARRAY MAI STORE HOGA POSTMEN KI REQUEST PR

// app.post('/user', async (req, res) => {
//   try {
//     await schema.validateAsync(req.body)  // joi ki validation ko use krne k liye 

//     users.push({ ...req.body, id: Date.now().toString(36) })  // id ko generate krne ka method lagaya hai 
//     res.send({ mess: "user added sucessfully" })
//   } catch (err) {
//     res.status(400).send({ error: err || "something went wrong", status: 400 })
//   }

// })


//   APP.GET: user ki req ko server get keraga

// app.get('/user', (req, res) => {
//   try {
//     res.send(users)
//   } catch (err) {
//     res.send("something went wrong")
//   }

// })

// user delete hoga

// app.delete('/user/:id', (req, res) => {
//   try {
//     const { id } = req.params //id ko get krne k liye req.params use hota hai
//     console.log(id)
//     const index = users.findIndex((user) => user.id == id)
//     users.splice(index, 1)
//     res.send({ mess: "user deleted" })
//   } catch (err) {
//     res.send("something went wrong")
//   }
// })
//user update hoga

// app.put('/user/:id', (req, res) => {
//   try {
//     const { id } = req.params
//     console.log(id)
//     const index = users.findIndex((user) => user.id == id)
//     users.splice(index, 1, { ...req.body, id })
//     res.send({ mess: "user updated" })
//   } catch (err) {
//     res.send("something went wrong")
//   }
// })





//AB DATA DATABASE MAI STORE HOGA 

//   app.post('/user', async (req, res) => {
//  try {
//        await schema.validateAsync(req.body)  // joi ki validation ko use krne k liye 
//        const {email} = req.body   
//        const user = User.find({email})   
//        if (email == user )   {
//         res.status(400).send({status:400,mes:"user exist"})
//        } 
//        else{                     
//        const user = await User.create(req.body)    // user database pr create hoga
//        res.status(201).send({ status:201, user})
//        }
//   } catch (err) {
// res.status(400).send({ error: err ,  status: 400 })
//  }

// })





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})