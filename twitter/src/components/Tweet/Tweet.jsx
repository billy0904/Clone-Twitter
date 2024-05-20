import React from 'react';
import styled from 'styled-components';
import { IoPersonCircleSharp } from "react-icons/io5";

const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start; /* 최상단에 정렬 */
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const ProfileImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
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


const Content = styled.p`
    margin-top: 10px;
`;

const Tweet = () => {
    return (
        <MainContainer>
            <ProfileImage><IoPersonCircleSharp size="55" color='grey'/></ProfileImage>
            <TweetContainer>
                <UserInfo>
                    <UserName>이가빈</UserName>
                    <UserId>@billy0904</UserId>
                    <PostTime> · 7시간</PostTime>
                </UserInfo>
                <Content>어쩌구저쩌구</Content>
            </TweetContainer>
        </MainContainer>
    )
}

export default Tweet;
