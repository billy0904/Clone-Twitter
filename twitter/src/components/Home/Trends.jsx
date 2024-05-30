import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 40px;
`;

const TrendsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    width: 230px;
`;

const Search = styled.input`
    height: 40px;
    width: 250px;
    padding-left: 20px;
    border: none;
    background-color: #EFF3F4;
    border-radius: 20px;
    font-size: 15px;
    outline: none;
`;

const Trends = () => {
    return (
        <MainContainer>
            <Search type='text' placeholder='검색'></Search>
            <TrendsContainer>

            </TrendsContainer>
        </MainContainer>
    )
}

export default Trends;