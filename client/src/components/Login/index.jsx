import React from 'react'
import Logo from './Logo'
import LoginPage from './LoginPage';
import LoginForms from './LoginForms';
import SingInForm from './SingInForm';
import LogInForm from './LoginForm';
import Button from '../shared/styles/Button';
import CustomBtn from '../shared/styles/CustomBtn';
import { colors } from '../shared/styles/styled';


const Login = (props) =>{
    return (
        <LoginPage>
            <Logo>GO 2 CHAT</Logo>
            <LoginForms>
                <SingInForm />
                <LogInForm />
                <CustomBtn bg={colors.yellow} fz='1.7rem' h='3rem' >Be Anonim</CustomBtn>
            </LoginForms>
        </LoginPage>
    )
}


export default Login