import React from 'react';
import styled from 'styled-components';
import { IoPersonCircleSharp } from "react-icons/io5";

const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start; /* 최상단에 정렬 */
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

const TweetDetail = () => {
    return (
        <MainContainer>
            <ProfileImage><IoPersonCircleSharp size="55" color='grey'/></ProfileImage>
            <TweetContainer>
                <UserInfo>
                    <UserName>이가빈</UserName>
                    <UserId>@billy0904</UserId>
                </UserInfo>
                <Content>어쩌구저쩌구 생물학 오늘 출첵 왜 안 하지</Content>
                <Translate>번역하기</Translate>
                <PostTime>오후 13:18 · 5월 20일, 2024</PostTime>
            </TweetContainer>
        </MainContainer>
    )
}

export default TweetDetail;
