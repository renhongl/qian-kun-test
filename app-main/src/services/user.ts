import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { User } from "../models/user";


function getUsers() {
    return fetch('http://localhost:5000/users').then(res => res.json())
}

function createUser(user: Partial<User>) {
    return fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
}

export const useCreateUser = () => {
    const mutation = useMutation({
        mutationFn: createUser
    });

    return mutation;
}

export const useLoadUser = () => {
    const { isLoading, data } = useQuery<User[]>('users', getUsers);

    return {
        users: data || [],
        isLoading
    }
}