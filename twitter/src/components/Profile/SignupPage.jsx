import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { postRegister } from '../../API/user';
import { postLogin } from '../../API/user';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LogoContainer = styled.div`
    margin-bottom: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 10px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #1D9BF0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #000000;
    }
`;


const SignupPage = () => {
    // 회원가입 API
    const [signup, setSignup] = useState({ email: "", password: "", nickname: ""});
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const navigate = useNavigate(); 

    const onChangeSignup = (e) => {
        const { name, value } = e.target;
        setSignup({ ...signup, [name] : value });
    };

    const Signup = async (e) => {
        e.preventDefault();
        const { email, password, nickname } = signup;
        const response = await postRegister(email, password, nickname);
        if (response.status === 201) {
            alert("회원가입 성공! 로그인을 진행해주세요.");
            setSignup({ email: "", password: "", nickname: "" });
        }
        else if (response.response.status === 400) {
            alert(response.response.data.message);
        }
    };

    // 로그인 API
    const navigate = useNavigate();
    const [login, setLogin] = useState({ email: "", password: ""});

    const onChangeLogin = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name] : value });
    };

    const Login = async (e) => {
        e.preventDefault();
        const { email, password } = login;
        const response = await postLogin(email, password);
        if (response.status === 201) {
            alert(`로그인 성공! ${response.data.nickname}님 환영합니다.`);
            navigate("/");
            window.location.reload();
        }
        else if (response.response.status === 400) {
            alert("아이디와 비밀번호가 맞는지 다시 확인해주세요!");
        }
    };

    return (
        <Container>
            <LogoContainer><BsTwitterX size="50" /></LogoContainer>
            <h2>회원가입</h2>
            <Form onSubmit={Signup}>
                <Input
                    type="email"
                    placeholder="이메일"
                    value={signup.email}
                    name="email"
                    onChange={onChangeSignup}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={signup.password}
                    name='pw'
                    onChange={onChangeSignup}
                />
                <Input
                    type="text"
                    placeholder="닉네임"
                    value={signup.nickname}
                    name="nickname"
                    onChange={onChangeSignup}
                />
                <Button type="submit">회원가입</Button>
            </Form>
            <h2>로그인</h2>
            <Form onSubmit={Login}>
                <Input
                    type="email"
                    placeholder="이메일"
                    value={login.email}
                    name="emai"
                    onChange={onChangeLogin}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={login.password}
                    onChange={onChangeLogin}
                />
                <Button type="submit">로그인</Button>
            </Form>
        </Container>
    );
};

export default SignupPage;
