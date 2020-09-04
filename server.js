const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');




//middleware
app.use(express.urlencoded({extended: true}))

app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: "freedmeseymour",
    resave: false,
    saveUnitialized: false
}));

//html
// // app.use(express.static("/styles",'public'));
// app.use(express.static('public'));
// // app.use(express.static(__dirname, '/public'));
app.use('/public', express.static('public'));


app.get('/', (req, res)=>{
  res.render('index.ejs');
});

const PORT =process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/blog'
// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true},() =>{
    console.log('we are connected YO')
});

  
        
        app.listen(PORT, () => {
            console.log('listening on ', PORT);
});