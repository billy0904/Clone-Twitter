import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const NavContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 790px;
    height: 898px;
`;

const MainPage = () => {
    return (
        <NavigationBar />
    );
};

export default MainPage;