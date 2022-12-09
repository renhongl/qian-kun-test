import React from 'react'
// import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components'
import UserTable from '../components/UserTable'
import { User } from '../models/user';
// import { useCreateUser, useLoadUser } from '../services/user';
import { useHttp } from '../utils/http';
import { useQuery, gql, useMutation } from '@apollo/client';

interface Data {
    users: User[]
}

export default function Home() {
    const http = useHttp();
    // const queryClient = useQueryClient();

    // const { data: users, isLoading: loadIsLoading } = useQuery('load users', () => http<User[]>('users'))

    // const { mutate } = useMutation((user: Partial<User>) => http<User>('users', { method: 'POST', data: user }), {
    //     onSuccess: () => queryClient.invalidateQueries(['load users'])
    // });

    const USERS = gql`
        query {
            users {
                _id
                name
            }
        }
    `

    const CREATE_USER = gql`
        mutation Mutation($user: UserParam) {
            createUser(user: $user) {
                name
            }
        }
    `

    const { loading, error, data } = useQuery<Data>(USERS);
    const [createUser, { data: user }] = useMutation(CREATE_USER);

    return (
        <Container>
            <UserTable users={data?.users} isLoading={loading}></UserTable>
            <div>
                <input type="text" />
                <button onClick={() => {
                    createUser({
                        variables: {
                            user: {
                                name: 'ddd',
                                password: '222'
                            }
                        }
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