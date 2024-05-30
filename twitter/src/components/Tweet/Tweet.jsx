import React, { useState } from 'react';
import styled from 'styled-components';
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { DeleteTweetData } from '../../API/tweet';

const MainContainer = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    text-decoration: none;
    color: inherit;
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

const DeleteButton = styled.button`
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    margin-left: auto;
    font-size: 14px;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background-color: white;
    padding: 23px;
    border-radius: 15px;
    width: 260px;
`;

const ModalTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const ModalText = styled.p`
    font-size: 15px;
    margin-bottom: 20px;
    color: grey;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ModalButton = styled.button`
    background: ${props => (props.confirm ? 'red' : '#FFFFFF')};
    color: ${props => (props.confirm ? '#FFFFFF' : '#000000')};
    font-size: 15px;
    font-weight: 700;
    border: none;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
        background: ${props => (props.confirm ? '#cc0000' : '#999')};
    }
`;

const Tweet = ({ id, name, content, time, accountId, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        setShowModal(false);
        const result = await DeleteTweetData(id, accountId);
        if (result) {
            onDelete(id);
        } else {
            console.error('트윗 삭제 실패');
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <>
            <MainContainer to={`/post/${id}`}>
                <ProfileImage><IoPersonCircleSharp size="55" color='grey'/></ProfileImage>
                <TweetContainer>
                    <UserInfo>
                        <UserName>{name}</UserName>
                        <UserId>@billy0904</UserId>
                        <PostTime>{time}</PostTime>
                        <DeleteButton onClick={(e) => { e.preventDefault(); handleDeleteClick(); }}>삭제</DeleteButton>
                    </UserInfo>
                    <Content>{content}</Content>
                </TweetContainer>
            </MainContainer>
            {showModal && (
                <ModalBackground>
                    <ModalContainer>
                        <ModalTitle>게시을(를) 삭제할까요?</ModalTitle>
                        <ModalText>이 동작은 취소할 수 없으며 내 프로필, 나를 팔로우하는 계정의 타임라인, 그리고 검색 결과에서 삭제됩니다.</ModalText>
                        <ButtonContainer>
                            <ModalButton confirm onClick={handleConfirmDelete}>삭제하기</ModalButton>
                            <ModalButton onClick={handleCancelDelete}>취소</ModalButton>
                        </ButtonContainer>
                    </ModalContainer>
                </ModalBackground>
            )}
        </>
    );
};

export default Tweet;
