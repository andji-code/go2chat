import React from 'react'
import Logo from './Logo'
import LoginPage from './LoginPage';
import LoginForms from './LoginForms';
import SingInForm from './SingInForm';


const Login = (props) =>{
    return (
        <LoginPage>
            <Logo>GO 2 CHAT</Logo>
            <LoginForms>
                <SingInForm />
                <div className="login">login</div>
                <div className="anonim">anonim</div>
            </LoginForms>
        </LoginPage>
    )
}


export default Login