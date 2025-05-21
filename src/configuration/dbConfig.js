const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud_db",{
});

mongoose.connection.on("Conncted",()=>{
         console.log("conncetd to MongoDB");
});

mongoose.connection.on("Error",(err)=>{
         console.error(`MongoDb connection error ${err}`);
});
       
    

module.exports = mongoose;
