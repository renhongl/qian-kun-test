



import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';

import { userTypeDefs, userResolvers } from './user';
import { todoTypeDefs, todoResolvers } from './todo';

mongoose.connect('mongodb://localhost:27017/qiankun').then(() => {
    console.log('db connected!');
})

const server = new ApolloServer({
    typeDefs: [userTypeDefs, todoTypeDefs],
    resolvers: [userResolvers, todoResolvers],
})

startStandaloneServer(server, {
    listen: { port: 5000 },
}).then(({ url }) => {
    console.log(`Server ready at: ${url}`)
})






