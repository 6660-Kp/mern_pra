require('dotenv').config()

const express =require("express")
const workoutRoutes=require('./routes/workouts')
const mongoose=require('mongoose')
//express app
const app = express () 

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes group all the route in workouts 
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI).then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log('listeneing on port',process.env.PORT)
    })
    
}).catch((error)=>{
    console.log(error)
})


//listening 



