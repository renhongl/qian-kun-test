import React from 'react'
import { useUser } from '../services/user';

export default function Home() {

    const user = useUser();


    return (
        <div>
            <span>{user?.name}</span>
        </div>
    )
}
