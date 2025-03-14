import User from "../models/database_schema/index.mjs";
// import joi from "joi"
// import schema from "../schema/joi_validation.mjs";

// import chalk from "chalk"





const createUser = async (req, res) => {
  try {
    // Validate the request body using Joi
    // await schema.validateAsync(req.body);

    const {email} = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the user already exists, send an error response
      return res.status(400).send({ status: 400, message: "User already exists!" });
    } else {
      // If the user does not exist, create a new user
      const newUser = await User.create(req.body);
      return res.status(201).send({ status: 201, user: newUser });
    }

  } catch (err) {
    // Handle validation errors or any other errors
    console.error(err);
    return res.status(400).send({ error: err.message, status: 400 });
  }
};


const getAllUser = async (req, res) => {
  try {
    const user = await User.findOne({            // user ko find krne k methods hain documentation ma mil jaye  gay mongoose ki "find" , user.find() se sare user get hojaye gay 
      email:"alina12@gmail.com"
    })
    res.send(user)
  } catch (err) {
    res.status(400).send({ error: err ,  status: 400 })

  }

}

const updataUser =  async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id,req.body)
    res.send(user)
  } catch (err) {
    res.status(400).send({ error: err ,  status: 400 })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params //id ko get krne k liye req.params use hota hai
    const user =  await User.findByIdAndDelete(id)
    res.send(user)
  } catch (err) {
    res.status(400).send({ error: err ,  status: 400 })

  }
}

const login =  async (req, res) => {
  try {
        // await schema.validateAsync(req.body)  // joi ki validation ko use krne k liye 
        const {email,password} = req.body                         
        const user = await User.findOne({email}) // user ko find karega email se
        if (user){
          if(password==user.password){
            res.status(200).send({ status:200, user, mess:"user found"})

          }
          else{
            res.status(404).send({ error: err ,  status: 404 , mess:"password incorrect"})

          }

        }
        else {
          res.status(404).send({ error: err ,  status: 404 , mess:"user not found"})

        }
     
   } catch (err) {
 res.status(400).send({ error: err ,  status: 400 })
  }
                                       
 }                         

 export {createUser,getAllUser,updataUser,deleteUser,login}