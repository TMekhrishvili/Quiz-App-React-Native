import React from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

const AppHeader = () => {
    return (
        <Container >
            <Header style={{ backgroundColor: '#1f2421' }}>
                <Left />
                <Body>
                    <Title>Quiz App</Title>
                </Body>
                <Right />
            </Header>
        </Container>
    );
}
export default AppHeader