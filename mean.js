
// const express = require('express');
// //@ initializing express app
// const app = express()
// const server = require('http').Server(app);
// require('colors');
// const path = require('path');
// const dotenv =  require('dotenv')
// const morgan = require('morgan');
// const {v4: uuidv4} = require("uuid")

// const io = require('socket.io')(server);

// const {ExpressPeerServer} = require('peer');

// const peerServer = ExpressPeerServer(server,{
//     debug: true,
// });


// //set were env file is
// dotenv.config({path:"./config/config.env"})
// // static files

// //set the vew enging
// app.set("view engine","ejs")
// app.set('views',path.join(__dirname,'views'))

// // use json-paser
// app.use(express.urlencoded({extended:false}))
// app.use(express.json());
// //static files
// app.use(express.static(__dirname + '/public'));



// // logger
// const value = process.env.NODE_ENV || 'development'
// if(value=== 'development'){ 
//     app.use(morgan('dev'))
// }

// // Mount Routes
// app.get('/',(req,res)=>{
//     res.status(200).redirect(`/${uuidv4()}`);
// })


// app.get('/:room',(req,res)=>{
//     res.status(200).render('home',{roomId:req.params.room});
// })


// io.on("connection", (socket)=>{
//     socket.on("join-room",(roomId,userId)=>{
//         socket.join(roomId);
//         socket.to(roomId).broadcast.emit("user-connected", userId);
//     });
// });






// // set port, listen for requests
// const PORT = process.env.API_PORT || 8080
// const myServer = server.listen(PORT,console.log(`server.runing on prot:: ${PORT}`.cyan))

// // hander unhandled promis Rejections
// process.on('unhandledRejection',(e,promis)=>{
//     console.log(`ERROR: ${e.message}`.bold.blue)
//     //close server
//     myServer.close(()=> process.exit(1))
// })