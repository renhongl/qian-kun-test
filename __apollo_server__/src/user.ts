import mongoose from 'mongoose';

const User = mongoose.model('user', new mongoose.Schema({
    _id: String,
    name: String,
    password: String
}));

export const userTypeDefs = `#graphql
    type User {
        _id: String
        name: String
        password: String
    }

    type Query {
        users: [User]
        login(name: String, password: String): User
    }
 `

export const userResolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
        login: async (parent, args, contextValue, info) => {
            return await User.findOne({ name: args.name, password: args.password })
        }
    }
}








