import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import TimeLine from './TimeLine';
import Trends from './Trends';

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
            <Trends />
        </MainContainer>
    );
};

export default MainPage;