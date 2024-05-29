import React from 'react';
import styled from 'styled-components';
import { IoPersonCircleSharp } from "react-icons/io5";

const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
`;

const ProfileImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

const UserId = styled.span`
    color: #999999;
    font-size: 14px;
    margin-right: 10px;
`;

const PostTime = styled.span`
    color: #999999;
    font-size: 14px;
`;

const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Translate = styled.span`
    color: #1D9BF0;
    font-size: 15px;
    margin-bottom: 10px;;
`;

const Content = styled.p`
    margin-top: 15px;
`;

const TweetDetail = ({ content, time, name }) => {
    return (
        <MainContainer>
            <ProfileImage><IoPersonCircleSharp size="55" color='grey'/></ProfileImage>
            <TweetContainer>
                <UserInfo>
                    <UserName>{name}</UserName>
                    <UserId>
                    @billy0904
                </UserId>
            </UserInfo>
            <Content>{content}</Content>
            <Translate>번역하기</Translate>
            <PostTime>{time}</PostTime>
        </TweetContainer>
    </MainContainer>
);
};

export default TweetDetail;
