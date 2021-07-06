const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());


mongoose.connect('mongodb+srv://calvin:calvin969@cluster0.2d3ff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log('Database Connected Successfully');
})
  .catch(error => console.log(error));


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000,()=>{
    console.log("Server is running..")
})

module.exports = app;
