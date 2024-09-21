import React ,{useState} from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { PiUserList } from "react-icons/pi";
import logo from '/logo.png'
const Login = () => {
    const [email , setEmail] = useState('');
    const [loginId , setLoginId] = useState('');
    
   
    return (
        <>
            <div className="container login">
                <div className="login-container">
                    {/* Instructions main Container div */}
                    <div className="instructions-container sub-container">
                        <div className="logo-container">
                            <img src={logo} alt="Logo Here!" />
                        </div>
                        <div className="instruction-content-container">
                            <div className="content">
                                <p>
                                    <span className="bold">Important Information : </span><br></br>
                                    Please <span className="bold"> read</span> the information below and then kindly <span className="bold"> share</span> the requested information.
                                    <br></br>
                                    <br></br>
                                </p>
                                    <ul>
                                        <li> Do <span className="bold"> not</span> reveal your password to anybody<br></br></li>
                                        <li> Do <span className="bold"> not</span> reuse passwords<br></br></li>
                                        <li> Use Alphanumeric passwords<br></br></li>
                                        <li> Your Login ID. and security answer are required<br></br></li>
                                        <li> Login IDs are case sensitive<br></br></li>
                                    </ul>
                            </div>
                        </div>
                        <div className="instruction-footer-container">
                            <div className="content">Terms and Conditons | FAQs | Contact Us</div>
                        </div>
                    </div>
                    {/* Login form container div */}
                    <div className="login-items-container sub-container">
                        <div className="login-heading-container">
                            <div className="login-heading">Forgot Password? </div>
                            <div className="login-sub-heading">Don't Worry. We can help.</div>
                        </div>

                        <form action="" className="form">
                            <label htmlFor="username"><MdOutlineEmail className='inputIcons'/></label>
                            <input type="email" placeholder='Please fill in your email address' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            

                            <label htmlFor="loginId"> <PiUserList className='inputIcons'/> </label>
                            <input type="text" placeholder='Please fill in your login ID'  name='loginId' value={loginId} onChange={(e) => setLoginId(e.target.value)}/>

                            <div className="cant-Remember">
                                <a href="/">I can't Remember my Login ID</a>
                            </div>

                            <div className="button-sec-container">
                                <button className="backToLogIn">
                                    <p>Remember Your Password?</p>
                                    Back to Login
                                </button>
                                <button className="continue box-shadow">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login