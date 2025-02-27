
import express from "express"
const app = express()
const port = 5000
//192.168.21.47:5000

const users = []
app.get('/', (req, res) => {
    console.log("abcd")
  res.send('Hello World!')
  console.log(req.ip)
})

app.post('/user', (req, res) => {
 users.push({...req.body,id:users.length+1})
  res.send({mess:"user added sucessfully"})
  
})
app.get('/user', (req, res) => {
    res.send(users)
     
   })
   app.delete('/user/:id', (req, res) => {
    const {id} = req.params
    console.log(id)
    const index = users.findIndex(v=>v.id=== Number(id))
     users.splice(index,1)
   })
   app.put('/user/:id', (req, res) => {
    const {id} = req.params
    console.log(id)
    const index = users.findIndex((user)=>user.id==id)
     users.splice(index,1,{...req.body})
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})