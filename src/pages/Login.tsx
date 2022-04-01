import React from 'react';
import LoginRegisterWrapper from '../components/Wrapper/LoginRegisterWrapper';
import background from "../resources/images/login-bg.png";

const Login = () => {
    return (
        <LoginRegisterWrapper background={background}>
            <div>Login</div>
        </LoginRegisterWrapper>
    )
}

export default Login