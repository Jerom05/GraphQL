const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
const axios = require('axios')

const app = express()

const Schema = buildSchema(`
    type Query{
        User(id:String): Users,
    }

    type Users{
        id:String,
        firstName: String,
        age: Int
    }
`)

var root = {
    User: (args)=>{
        console.log(args)
        return axios.get(`http://localhost:3000/users/${args.id}`)
        .then(res=>res.data)
    }
};

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log("server running..")
})
