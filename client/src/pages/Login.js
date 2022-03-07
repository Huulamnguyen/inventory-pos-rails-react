import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ResetPasswordForm from '../components/ResetPasswordForm';
import {Container, Button} from 'react-bootstrap';

function Login({ onLogin }){
    const [showResetForm, setShowResetForm] = useState(false)
    const [showLogin, setShowLogin] = useState(true);

    return (        
        <Container>
            { showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <div>Don't have an account? &nbsp;
                        <Button variant="outline-dark" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </Button>
                        <Button onClick={() => setShowResetForm(!showResetForm)} className="m-3" variant="outline-dark"> {showResetForm?"Cancel Reset Password":"Reset Password"}</Button>
                        {showResetForm ? <ResetPasswordForm setShowResetForm={setShowResetForm} /> : null}
                    </div>
                </>
            ): (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <p>
                        Already have an account? &nbsp;
                        <Button  className="m-3" variant="outline-dark" onClick={() => setShowLogin(true)}>
                            Log In
                        </Button>
                    </p>
                </>
            )
        }
        </Container>
    )
}
export default Login;
