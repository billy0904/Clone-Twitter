import React, {useState} from 'react';
import styled from 'styled-components';
import TweetDetail from './TweetDetail';
import NavigationBar from '../Home/NavigationBar';
import { IoPersonCircleSharp } from "react-icons/io5";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    //margin-left: 300px;
    margin-right: 300px;
    //width: 1000px;
`;

const WriteTweet = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    width: 600px;
    position: relative;
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

const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const SendButton = styled.button`
    background-color: #1D9BF0;
    color: #FFFFFF;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
`;

const DetailPage = () => {
    const [hidePlaceholder, setHidePlaceholder] = useState(true);

    return (
        <MainContainer>
            <NavigationBar />
            <TweetContainer>
                <TweetDetail/>
                <WriteTweet>
                    <IoPersonCircleSharp size="55" color='grey'/>
                    <InputField 
                        type="text" 
                        onFocus={() => setHidePlaceholder(false)} // 입력 필드에 포커스되면 플레이스홀더를 숨기지 않음
                        onBlur={(e) => {
                            if (!e.target.value) { // 입력 필드가 비어 있으면 플레이스홀더를 다시 표시
                                setHidePlaceholder(true);
                            }
                        }}
                    />
                    <Placeholder hide={!hidePlaceholder}>답글 게시하기</Placeholder>
                    <SendButton>답글</SendButton>
                </WriteTweet>
            </TweetContainer>
        </MainContainer>
    )
}

export default DetailPage;