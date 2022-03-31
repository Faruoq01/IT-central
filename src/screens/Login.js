import React from 'react';
import '../styles/Login.scss';
import mail from '../assets/mail.png';
import password from '../assets/password.png';
import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <div className="main-page">
            <div className="pane">
                <div className="content">
                    <div className="login-text">Login</div>
                    <div className="email">
                        <div className="email-icon">
                            <img style={{width: '26px', height:'26px', marginBottom:'10px'}} src={mail} alt="email icon" />
                        </div>
                        <div className="email-text">
                            <input style={text} type="email" placeholder={'Email ID'} />
                        </div>
                    </div>
                    <div className="email">
                        <div className="email-icon">
                            <img style={{width: '20px', height:'27px', marginBottom:'10px'}} src={password} alt="email icon" />
                        </div>
                        <div className="email-text">
                            <input style={text} type="email" placeholder={'Passowrd'} />
                        </div>
                        <div className="email-pass">
                            Forgot ?
                        </div>
                    </div>
                    <Link to="/home">
                        <button className="buttons">Login</button>
                    </Link>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div className="account">Do you have an account?</div>
                        <div className="create">Create one.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const text = {
    fontFamily:'Roboto',
    fontWeight:'300',
    outline:'none',
    marginBottom:'13px',
    border:'none',
    fontSize:'14px'
}

export default Login;