
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import * as auth from '../auth-provider';
import { AuthParam } from '../models/auth';

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState(null); 

    const login = useCallback((param: AuthParam) => {
        auth.login(param).then(setUser).catch(() => {
            console.log('login failed');
        });
    }, [])

    const value = {
        user,
        login,
        setUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('no auth context');
    }
    return context;
}