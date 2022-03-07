import React, {useState} from 'react';
import { Form, Button, Alert} from 'react-bootstrap'

function ResetPasswordForm({setShowResetForm}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleResetPasswordForm(e){
        e.preventDefault();
        const newPassword = {
            email: email,
            password: password
        }

        fetch("/reset", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPassword)
        }).then((r) =>{
            setIsLoading(false);
            if(r.ok){
                r.json().then(setShowResetForm(false));
            } else {
                r.json().then((err) => setError(err.error));
            }
        })
    }

    return (
        <Form onSubmit={handleResetPasswordForm}>
            <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        autoComplete="off"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control 
                        id="password" 
                        type="password" 
                        placeholder="Enter New Password" 
                        autoComplete="current-password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Reset"}</Button>
                {error.length > 0 ? <Alert className="mt-3" variant="danger">{error}</Alert> : null}
        </Form>
    )
}

export default ResetPasswordForm;