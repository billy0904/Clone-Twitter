import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tweet from '../Tweet/Tweet';
import { IoPersonCircleSharp } from "react-icons/io5";
import { SendTweet } from '../../API/post';
import { GetTweetData } from '../../API/tweet';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const TimeLineContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 600px;
`;

const WriteTweet = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    position: relative;
    width: 600px;
    height: 100px;
    border-bottom: 1px solid #cccccc;
`;

const Placeholder = styled.span`
    position: absolute;
    top: 10px;
    left: 70px;
    color: #999999;
    font-size: 20px;
    pointer-events: none; 
    opacity: ${({ hide }) => (hide ? 0 : 1)};
`;

const InputField = styled.input`
    flex: 1;
    height: 30px;
    padding: 10px;
    margin-left: 10px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    outline: none;
    position: relative;
`;

const SendContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

const SendButton = styled.button`
    background-color: #1D9BF0;
    color: #FFFFFF;
    width: 100px;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
`;

const TimeLine = () => {
    const [tweets, setTweets] = useState([]);
    const [newTweet, setNewTweet] = useState('');
    const [hidePlaceholder, setHidePlaceholder] = useState(true);
    const [tweetData, setTweetData] = useState(null);

    const handleSendTweet = (e) => {
        e.preventDefault();
        const request = {
            accountId: "1",
            title: "제목1",
            content: newTweet,
        };
        SendTweet(request);
    };

    const handleDeleteTweet = (id) => {
        const updatedTweets = tweets.filter(tweet => tweet.id !== id);
        setTweets(updatedTweets);
    };

    useEffect(() => {
        const getTweet = async () => {
            const data = await GetTweetData();
            setTweetData(data);
        };

        getTweet();
    }, []);

    return (
        <MainContainer>
            <WriteTweet>
                <IoPersonCircleSharp size="55" color='grey'/>
                <InputField 
                    type="text" 
                    value={newTweet}
                    onChange={(e) => setNewTweet(e.target.value)}
                    onFocus={(e) => setHidePlaceholder(false)}
                    onBlur={(e) => {
                        if (!e.target.value) {
                            setHidePlaceholder(true);
                        }
                    }}
                />
                <Placeholder hide={!hidePlaceholder}>무슨 일이 일어나고 있나요?</Placeholder>
                <SendContainer>
                    <SendButton onClick={handleSendTweet}>게시하기</SendButton>
                </SendContainer>
            </WriteTweet>
            <TimeLineContainer>
                {tweets.map(tweet => (
                    <Tweet 
                        id={tweetData.postId} 
                        name={tweetData.writerName}
                        time={tweetData.CreatedDate}
                        content={tweetData.content} 
                        onDelete={() => handleDeleteTweet(tweetData.postId)} 
                    />
                ))}
            </TimeLineContainer>
        </MainContainer>
    );
};

export default TimeLine;
