const express = require('express');
const dbConnect = require('./dbConnect');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const userRoute = require('./routes/usersRoute');
const transactionsRoute = require('./routes/transactionsRoute');

app.use('/api/users/',userRoute);
app.use('/api/transactions/',transactionsRoute);

if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'));
    })
}


app.listen(port,()=>{
    console.log(`Node js server started at port ${port}`);
});

