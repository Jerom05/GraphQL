const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
const axios = require('axios')

const app = express()

const Schema = buildSchema(`
    type Company{
        id:String,
        name: String,
        description: String
    } 

    type Users{
        id:String,
        firstName: String,
        age: Int,
        Company: Company
    }

    type Query{
        user(id:String): Users,
        company(id:String): Company

    }
`)

var root ={
    Query:{
    
        user:(args)=>{
            return axios.get(`http://localhost:3000/users/${args.id}`)
            .then(res=>res.data)
        },
        company:(parent,args)=>{
            console.log(args)
            return axios.get(`http://localhost:3000/companies/${args.id}`)
            .then(res=>res.data)   
        }

    }
    
}


app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log("server running..")
})

