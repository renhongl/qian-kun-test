

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider,  } from 'react-query';
import { AuthProvider } from './auth';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

export default function AppProvider({ children }: { children: ReactNode }) {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                {children}
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}