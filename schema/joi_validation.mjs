// for backend validation we use these libraries , "joi", "yup", "zod" use anyone from these we use joi


import joi from "joi"
const schema = joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required()
}

)
export default schema