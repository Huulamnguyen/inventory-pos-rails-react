import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap'

function LoginForm({onLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        }).then ((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <Container>
            <h1>Inventory & POS</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Enter email" 
                        autoComplete="off"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="current-password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Login"}</Button>
                {errors.map(error => (
                    <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
                ))}
            </Form>
        </Container>
    )
}

export default LoginForm;