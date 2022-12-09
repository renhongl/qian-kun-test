

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider, } from 'react-query';
import { AuthProvider } from './auth';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache,
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

export default function AppProvider({ children }: { children: ReactNode }) {

    return (
        <ApolloProvider client={apolloClient}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    {children}
                </AuthProvider>
                <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
        </ApolloProvider>
    )
}