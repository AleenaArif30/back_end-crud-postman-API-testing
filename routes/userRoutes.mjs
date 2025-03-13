import express from "express"
const router = express.Router()

import  {createUser,getAllUser,updataUser,deleteUser,login} from "../controller/usercontroller.mjs"

router.post("/user/login" , login)
router.post("/user" , createUser)
router.get("/user" , getAllUser)
router.put("/user/:id" , updataUser)
router.delete("/user/:id" , deleteUser)


export default router
