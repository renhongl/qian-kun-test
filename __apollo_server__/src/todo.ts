import mongoose from 'mongoose';

const Todo = mongoose.model('todo', new mongoose.Schema({
    _id: String,
    name: String,
    password: String
}));

export const todoTypeDefs = `#graphql
    type Todo {
        _id: String
        text: String
    }

    type Query {
        todos: [Todo]
    }
`

export const todoResolvers = {
    Query: {
        todos: async () => {
            return await Todo.find()
        }
    }
}








