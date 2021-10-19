import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css';
import { Form } from 'react-bootstrap';
library.add(faGoogle);
const Login = () => {
    const { processLogIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const history = useHistory();
    const elementIcon = <FontAwesomeIcon icon={faGoogle} />

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //    Get User password and Validation of Password through Regex
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(email, password);
        console.log(password.length);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password should contain  atleast 2 uppercase letter');
            return;
        }
        processLogIn(email, password)
            .then(() => {
                history.push(redirect);
            })
            .catch((error) => {
                setError(error.message);
            })
    }


    const manageRedirectory = () => {
        signInGoogle()
            .then(() => {
                history.push(redirect);
            })
    }


    return (
        <Form onSubmit={handleSignIn} className="login  mt-5 mb-5 pt-5  ">
            <h1 className='text-secondary'>Login Here</h1>
            <div>
                <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Please Enter your email" required />
                <br />
                <hr />
                <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your password" required />
                <br />
                <hr />
                <p className="text-danger">{error}</p>
                <br />

                <button type='submit' className='bg-primary rounded text-white' style={{ width: "50%" }}>Sign In </button>
                <br />
                <br />
                <button onClick={manageRedirectory} className='bg-danger rounded text-white' style={{ width: "50%" }}>Sign In Using {elementIcon} Google</button>
                <br />
                <br />
                <NavLink to='/registration'>
                    <p className="text-danger">Don't have a Account?</p>
                </NavLink>


            </div>


        </Form>
    );
};

export default Login;