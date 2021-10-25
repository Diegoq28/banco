const express=require('express');
const morgan=require('morgan');
const app=express();
const path=require('path');
const session = require('express-session');
//const colors=require('colors'); #requerimiento de npm letras de color 
//const { patch } = require('./rutas/rutas'); //no se que hace preguntar proxima clase
app.use(morgan('dev'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vista'));

app.use(session({
    secret:'123',
    resave:true,
    saveUninitialized:true
}));

app.use(express.urlencoded({extended:true}));

app.use(require('./Rutas/rutas'));

app.use((err,req,res,next)=>{
    res.send({err:err.message});
});






app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log(`en el server ${app.get('port')}`)
});



/*const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("en conexion")
    res.end("el fin");
});

server.listen(3000,()=>{
    console.log("Esperando cliente".rainbow)
});


console.log('hola'.rainbow);*/

/*---------------------------------------------------------------*/
//separador de bloques de codigo
/*---------------------------------------------------------------*/