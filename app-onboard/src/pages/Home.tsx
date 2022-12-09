import React from 'react'
import { useUser } from '../services/user';
import { Card } from '../components/lib';
import styled from 'styled-components';

export default function Home() {

    const user = useUser();

    return (
        <Card title='User Information'>
            <div>
                <OneRow>
                    <span>User Name: {user?.name}</span>
                    <span>Age: {user?.age}</span>
                </OneRow>
                <OneRow>
                    <span>Group: {user?.group}</span>
                    <span>Gender: {user?.gender}</span>
                </OneRow>
                <OneRow>
                    <span>Email: {user?.email}</span>
                </OneRow>
            </div>
        </Card>
    )
}

const OneRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
`
