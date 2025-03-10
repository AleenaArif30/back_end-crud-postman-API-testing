

// install mongoose qk mongodb ki library bht large hoti hai isi liye hm mongoose use krty hain

import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@alina30.n6obc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Alina30`    // ye url mondodb ka cluster banate waqt milta hai

mongoose.connect(url)

export default mongoose