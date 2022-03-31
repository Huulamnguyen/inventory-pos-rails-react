import React, { useState } from 'react';
import {Form, Button, Alert } from 'react-bootstrap';

function CustomerUpdateForm({displayedCustomer, setDisplayedCustomer, setShowCustomerEditForm}){
    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        first_name: displayedCustomer.first_name,
        last_name: displayedCustomer.last_name,
        address: displayedCustomer.address,
        phone: displayedCustomer.phone
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        const updatedCustomer = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            address: formData.address,
            phone: formData.phone
        }
        fetch(`/customers/${displayedCustomer.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedCustomer)
        }).then( r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then(customer => setDisplayedCustomer(customer)).then(setShowCustomerEditForm(false))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control 
                        id="first_name" 
                        type="text" 
                        autoComplete="off"
                        name="first_name"
                        value = {formData.first_name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        id="last_name" 
                        type="text" 
                        autoComplete="off"
                        name="last_name"
                        value = {formData.last_name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        id="address" 
                        type="text" 
                        autoComplete="off"
                        name="address"
                        value = {formData.address}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        id="phone" 
                        type="text" 
                        autoComplete="off"
                        name="phone"
                        value = {formData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Update"}</Button>
                {errors.map(error => (
                    <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
                ))}
            </Form>
        </div>
    )
}

export default CustomerUpdateForm;