

import React, { ReactNode } from 'react';
import styled from 'styled-components';
import SubMenu from './SubNavi';

export default function SubLayout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <SubMenu />
            <Main>
                {children}
            </Main>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: calc(100vw - 60px);
`

const Main = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
`