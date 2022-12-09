

const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/qiankun').then(() => {
    console.log('db connected!');
})

const userModel = mongoose.model('user', {
    _id: String,
    name: String,
    password: String
})

const schema = buildSchema(`
    type User {
        _id: String,
        name: String,
        password: String
    }

    type Query {
        hello: String,
        getUser(name: String, password: String): User 
    }

    type Mutation {
        createUser(name: String, password: String): User
    }
`)

const root = {
    hello: () => {
        return 'Hello World'
    },
    getUser: ({ name, password}) => {
        return userModel.findOne({name, password})
    },
    createUser: (user) => {
        return userModel.create(user)
    }
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(5000, () => {
    console.log('Server on: http://localhost:5000')
})










