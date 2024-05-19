import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import TimeLine from './TimeLine';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    //width: 790px;
    //height: 898px;
`;

const MainPage = () => {
    return (
        <MainContainer>
            <NavigationBar />
            <TimeLine />
        </MainContainer>
    );
};

export default MainPage;