import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavigationBar from '../Home/NavigationBar';
import Tweet from '../Tweet/Tweet';
import { SlCalender } from "react-icons/sl";
import { useParams } from 'react-router-dom';
import { getAccountInfo } from '../../API/user';
import { getAccountTweets } from '../../API/user';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-right: 300px;
    align-items: flex-start;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
`;

const RowContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

const HeaderImg = styled.img`
    width: 550px;
    height: 180px;
    background-color: #999999;
`;

const ProfileImg = styled.img`
    width: 130px;
    height: 130px;
    position: absolute;
    margin-top: 100px;
    margin-left: -530px;
    border-radius: 50%;
    border: 2px solid #1D9BF0;
    background-color: black;
`;

const MyImage = styled.div`
    position: relative;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 70px;
`;

const UserName = styled.span`
    font-weight: 700;
    font-size: 22px;
`;

const UserId = styled.span`
    color: #999999;
    font-weight: 500;
    font-size: 15px;
`;

const Bio = styled.p`
    margin-top: 10px;
`;

const JoinDate = styled.span`
    color: #999999;
    font-size: 15px;
    margin-left: 10px;
`;

const FollowContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

const FollowNum = styled.span`
    font-size: 15px;
    font-weight: 900;
    margin-right: 5px;
`;

const Div = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #999999;
    margin-right: 15px;
`;

const ProfilePage = () => {
    const { id } = useParams();
    //const [tweets, setTweets] = useState([]);
    const [accountInfo, setAccountInfo] = useState(null);
    const [accountTweets, setAccountTweets] = useState([]);

    const handleDeleteTweet = (tweetId) => {
        const updatedTweets = accountTweets.filter(tweet => tweet.postId !== tweetId);
        setAccountTweets(updatedTweets);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getAccountInfo(id);
                setAccountInfo(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const fetchUserTweets = async () => {
            try {
                const tweetsData = await getAccountTweets(id);
                setAccountTweets(tweetsData);
            } catch (error) {
                console.error("Error fetching user tweets:", error);
            }
        };

        fetchUserData();
        fetchUserTweets();
    }, [id]);

    if (!accountInfo) {
        return <div>Loading...</div>;
    }

    return (
        <MainContainer>
            <NavigationBar />
            <ProfileContainer>
                <MyImage>
                    <HeaderImg src="../headerImage"/>
                    <ProfileImg />
                </MyImage>
                <UserInfo>
                    <UserName>{accountInfo.nickname}</UserName>
                    <UserId>@billy0904</UserId>
                    <Bio>망고시루 맛있겠다</Bio>
                    <RowContainer>
                        <SlCalender size={15} />
                        <JoinDate>가입일: 2024년 5월</JoinDate>
                    </RowContainer>
                    <FollowContainer>
                        <FollowNum>0</FollowNum>
                        <Div>팔로우 중</Div>
                        <FollowNum>0</FollowNum>
                        <Div>팔로워</Div>
                    </FollowContainer>
                </UserInfo>
                {accountTweets.map(tweet => (
                    <Tweet
                        key={tweet.postId}
                        id={tweet.postId}
                        name={tweet.nickname}
                        time={tweet.CreatedDate}
                        content={tweet.content}
                        onDelete={() => handleDeleteTweet(tweet.postId)}
                    />
                ))}
            </ProfileContainer>
        </MainContainer>
    );
};

export default ProfilePage;
