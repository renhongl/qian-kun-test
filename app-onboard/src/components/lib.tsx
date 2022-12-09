
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const Card = ({ children, title = '' }: { children: ReactNode, title?: string }) => {

    return (
        <Wrap>
            <Header>{title}</Header>
            <Content>
                {children}
            </Content>
        </Wrap>
    )
}

const Content = styled.div`
    padding: 10px;
`

const Header = styled.div`
    border-bottom: 1px solid gray;
    font-weight: bold;
    padding: 10px;
`

const Wrap = styled.div`
    border: 1px solid gray;
    border-radius: 4px;
    width: 400px;
`