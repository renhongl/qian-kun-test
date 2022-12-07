import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components'
import UserTable from '../components/UserTable'
import { User } from '../models/user';
// import { useCreateUser, useLoadUser } from '../services/user';
import { useHttp } from '../utils/http';

export default function Home() {
    const http = useHttp();
    const queryClient = useQueryClient();

    const { data: users, isLoading: loadIsLoading } = useQuery('load users', () => http<User[]>('users'))

    const { mutate } = useMutation((user: Partial<User>) => http<User>('users', { method: 'POST', data: user }), {
        onSuccess: () => queryClient.invalidateQueries(['load users'])
    });

    return (
        <Container>
            <UserTable users={users} isLoading={loadIsLoading}></UserTable>
            <div>
                <input type="text" />
                <button onClick={() => {
                    mutate({
                        name: 'aaa'
                    })
                }}>Create</button>
            </div>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    display: inline-block;
    height: 100vh;
`