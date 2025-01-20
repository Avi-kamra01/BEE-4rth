const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{    
    res.send('About Us Page');
});

app.get('*',(req,res)=>{
    res.send('404 Page Not Found');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});