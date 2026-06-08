const express = require('express');
const app = express();

app.use(express.json());

// app.get('/',function handleHomePage(req,res){
//     res.send('Hello World')
// })


//route + function 
function handleHomePage(req,res){
    res.send('Hello World , This is my first Node App')
}

app.get('/',handleHomePage);


app.listen(8085, () => {
    console.log('Server running on http://localhost:8085');
});

