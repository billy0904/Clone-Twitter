import React from 'react';
import styled from 'styled-components';
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { PiBell } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { RiSlashCommands2 } from "react-icons/ri";
import { RiFileList2Line } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const NavContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 300px;
    height: 898px;
    margin-left: 220px;
`;

const LogoContainer = styled.div`
    margin-bottom: 10px;
`;

const NavButton = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    height: 50px;
    font-weight: 400;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    
`;

const PostButton = styled.div`
    background-color: #00ACEE;
    width: 240px;
    height: 52px;
    border-radius: 40px;
    text-align: center;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 600;
    line-height: 52px;
    margin-top: 10px;
`;

const IconContainer = styled.div`
    margin-right: 20px;
`;

const UserInfoContainer = styled.div`
    display: flex;
`;

const NavigationBar = () => {
    return(
        <NavContainer>
            <LogoContainer><BsTwitterX size="30" /></LogoContainer>
            <NavButton>
                <IconContainer><GoHome size="28"/></IconContainer>
                홈</NavButton>
            <NavButton>
                <IconContainer><RiSearchLine size="28" /></IconContainer>
                탐색하기</NavButton>
            <NavButton>
                <IconContainer><PiBell size="28" /></IconContainer>
                알림</NavButton>
            <NavButton>
                <IconContainer><HiOutlineMail size="28" /></IconContainer>
                쪽지</NavButton>
            <NavButton>
                <IconContainer><RiSlashCommands2 size="28" /></IconContainer>
                그록</NavButton>
            <NavButton>
                <IconContainer><RiFileList2Line size="28" /></IconContainer>
                리스트</NavButton>
            <NavButton>
                <IconContainer><BiBookmark size="28" /></IconContainer>
                북마크</NavButton>
            <NavButton>
                <IconContainer><MdPeopleOutline size="28" /></IconContainer>
                커뮤니티</NavButton>
            <NavButton>
                <IconContainer><BsTwitterX size="28" /></IconContainer>
                Premium</NavButton>
            <NavButton>
                <IconContainer><BsPerson size="28" /></IconContainer>
                프로필</NavButton>
            <NavButton>
                <IconContainer><CgMoreO size="28" /></IconContainer>
                더보기</NavButton>
            <PostButton>게시하기</PostButton>
            <UserInfoContainer></UserInfoContainer>
        </NavContainer>
    )

};

export default NavigationBar;