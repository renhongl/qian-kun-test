import React, { useState } from 'react'
import { useAuth } from '../context/auth'

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    return (
        <div>
            <h2>Login</h2>
            <div>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => login({ userName, password })}>Login</button>
            </div>
        </div>
    )
}
