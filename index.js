const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const db = require("./middleware/db.connection");
const detailSchema = require("./models/mysql.model");
const DetailsRouter = require('./routes/details.route'); 

app.use(cors());
app.use(express.json())

db.authenticate().then(() =>{
    console.log("Database connected successfully!!!");
//     db.sync()  
    
// // Force sync all models 
// // It will drop the table first  
// // and re-create it afterwards 
// db.sync({force:true})
}).catch((err) => {
    console.log("Database connection failed :(",err);
});
app.use('/api/v1',DetailsRouter)
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
