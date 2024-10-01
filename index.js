const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
const router=require('./routes/route');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost:27017/relationships');
mongoose.connect('mongodb://localhost:27017/relationships', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

app.use(router);
app.listen(3000,()=>{
   console.log( 'Server On!');
})