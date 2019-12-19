const Mongoose = require('mongoose');
const Url = 'mongodb+srv://chirag:oHILdCfqGHCCdsBu@cluster0-7a8as.mongodb.net/WherebyDb?retryWrites=true&w=majority'
//"mongodb://localhost:27017/Testdb";
// mongodb+srv://Chiragpwr:<Chiragpwr?007>@cluster0-7a8as.mongodb.net/WherebyDb
const mailCredential = {
  Username: "pawarcrg@gmail.com",
  Password: "mqggrheqojvqoazd"
}

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

exports.DbConnect = ((req,res)=> {
    Mongoose.connect(Url,options).then(()=>{
     // res.send(JSON.stringify('server and db connected'))
     console.log('server and db connected');
    }).catch((error)=>{
        console.error(error);
    })
    });

    exports.Maildata = mailCredential;




