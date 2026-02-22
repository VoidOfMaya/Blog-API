import express from 'express'
import 'dotenv/config'

const app = express();
//parse req string to json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req, res)=>{
    res.json({message: "hellow world!"});
})




const PORT = process.env.PORT || 3000;
app.listen(PORT, (err)=>{
    if(err) throw new err ;
    console.log(`Server running on port: ${PORT}`);
})