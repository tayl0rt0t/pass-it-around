const express = require('express');
const jsxEngine = require('jsx-view-engine');
//const pass = require('./views/Pass')
const app = express();

const PORT = 3000;

let b = 98;


app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.get('/',(req,res) => {
    res.render('Pass',{title:'99 bottles of Beer on the wall' , minus:'take one down pass it around' })
    b = 98;
})
app.get(`/:${b}`,(req,res) => {
    res.render('Pass',{title:`${b} bottles of beer on the wall`,minus: `take one down pass it around`})
    
    b--;
})

app.listen(PORT);