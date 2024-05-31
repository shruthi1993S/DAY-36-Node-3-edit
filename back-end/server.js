

const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const userRoutes=require("./routes/userRoutes")

require("dotenv").config()

const cors=require("cors")
const app=express()

const PORT=3000;

app.use(cors())
app.use(bodyParser.json())
app.use("/apiUser",userRoutes)
mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT,()=>{
    
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error)=>{
    console.log("Connection error",error.message)
})

function displayName(firstname,secondname){
    return `Hey,${firstname}${secondname} !!!`
}

app.get('/',(req,res)=>{
    res.json(displayName("Hasma","Shruthi"))
})

