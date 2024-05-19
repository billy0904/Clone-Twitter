import React, {useState} from 'react';
import styled from 'styled-components';
import Tweet from '../Tweet/Tweet';
import { IoPersonCircleSharp } from "react-icons/io5";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 600px;
`;

const WriteTweet = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    position: relative;
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
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #cccccc;
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
    const [hidePlaceholder, setHidePlaceholder] = useState(true); // 플레이스홀더를 숨기기 위한 상태

    return (
        <MainContainer>
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
                <Placeholder hide={!hidePlaceholder}>무슨 일이 일어나고 있나요?</Placeholder>
            </WriteTweet>
                <SendContainer>
                <SendButton>게시하기</SendButton>
                </SendContainer>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
        </MainContainer>
    )
}

export default TimeLine;
