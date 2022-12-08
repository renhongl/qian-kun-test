const mongoose = require('mongoose');

module.exports = userSchema = `
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
`
module.exports = userModel = mongoose.model('user', {
    _id: String,
    name: String,
    password: String
})

module.exports = userRoot = {
    getUser: ({ name, password }) => {
        return userModel.findOne({ name, password })
    },
    createUser: (user) => {
        return userModel.create(user)
    }
}

