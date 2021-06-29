const graphql = require('graphql')
const _ = require('lodash')
const axios = require('axios')

const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema}= graphql

const users = [
    {id: '1', firstName: 'Jerom Ghagra', age: 24},
    {id: '2', firstName: 'Jessica Sarah', age: 23}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{id:{type: GraphQLString}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/users/${args.id}`)
                .then(res=>res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})