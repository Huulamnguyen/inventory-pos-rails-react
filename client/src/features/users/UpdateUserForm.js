import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'


function UpdateUserForm({user, setUser, setShowUpdateUserForm}){
    const [email, setEmail] = useState(user.email);
    const [username, setUsername] = useState(user.username);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmitForm(event) {
        event.preventDefault();
        const updatedUser = {
            email: email,
            username: username,
            address: address,
            phone: phone
        }
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedUser)
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => setUser(user))
                        .then(setShowUpdateUserForm(false))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return (
            <Form onSubmit={handleSubmitForm}>
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
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        id="username" 
                        type="text" 
                        placeholder="Enter username" 
                        autoComplete="off"
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        id="address" 
                        type="text" 
                        placeholder="Address" 
                        autoComplete="off" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        id="phone" 
                        type="text" 
                        placeholder="Phone" 
                        autoComplete="off" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Update"}</Button>
                {errors.map(error => (
                    <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
                ))}
            </Form>
    )
}

export default UpdateUserForm;