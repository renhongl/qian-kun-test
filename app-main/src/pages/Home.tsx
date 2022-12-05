import React from 'react'
import styled from 'styled-components'

export default function Home() {
    return (
        <Container>
            Micro-Frontend Main Page
        </Container>
    )
}


const Container = styled.div`
    width: calc(100vw - 200px);
    display: inline-block;
    height: 100vh;
`