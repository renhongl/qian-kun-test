import React from 'react'
import styled from 'styled-components'
import Table from '../components/Table'
import { useCreateUser, useLoadUser } from '../services/user';

export default function Home() {

    const { users, isLoading } = useLoadUser();
    console.log(users);
    const mutation = useCreateUser();
    console.log(mutation.isLoading, mutation.data);

    return (
        <Container>
            <Table users={users} isLoading={isLoading}></Table>
            <div>
                <input type="text" />
                <button onClick={() => {
                    mutation.mutate({
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