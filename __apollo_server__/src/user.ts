import mongoose from 'mongoose';

const User = mongoose.model('user', new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    password: String
}));

export const userTypeDefs = `#graphql
    type User {
        _id: String
        name: String
        password: String
    }

    input UserParam {
        name: String
        password: String
    }

    type Query {
        users: [User]
        login(name: String, password: String): User
    }

    type Mutation {
        createUser(user: UserParam): User
        deleteUser(_id: String): User
    }
 `

export const userResolvers = {
    Query: {
        users: async () => {
            return await User.find()
        },
        login: async (parent, args, contextValue, info) => {
            return await User.findOne({ name: args.name, password: args.password })
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            console.log(args)
            return await User.create({ _id: new mongoose.Types.ObjectId(), ...args.user });
        },
        deleteUser: async (parent, args) => {
            return await User.deleteOne({ _id: args._id })
        }
    }
}








