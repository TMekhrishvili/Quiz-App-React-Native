import React from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

const AppHeader = () => {
    return (
        < >
            <Header style={{ backgroundColor: '#1f2421' }}>
                <Left />
                <Body>
                    <Title>Quiz App</Title>
                </Body>
                <Right />
            </Header>
        </>
    );
}
export default AppHeader