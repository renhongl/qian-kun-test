import { User } from './../models/user';
import { useEffect, useState } from 'react';





export const useUser = () => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        fetch('http://localhost:5000/users').then(async res => {
            const data = await res.json();
            if (data && data.length !== 0) {
                setUser(data[0]);
            }
        })
    }, [])

    return user;
}