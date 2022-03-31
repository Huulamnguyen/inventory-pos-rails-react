import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function NewCustomerForm({sale, setShowCustomerForm}){
    const storeId = sale.store.id;
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // console.log(sale)
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(storeId)
        const newCustomer = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            address: formData.address,
            phone: formData.phone,
            store_id: storeId,
        }
        console.log(newCustomer)
        fetch('/customers', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCustomer)
        })
            .then(r => {
                setIsLoading(false);
                if(r.ok){
                    r.json().then(customer =>
                        fetch(`/sales/${sale.id}`, {
                            method: "PATCH",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({customer_id: customer.id})
                        })
                    )
                    .then(setShowCustomerForm(false))
                } else{
                    r.json().then(err => setErrors(err.errors))
                }
            })
    }

    return (
        <Form className="mt-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    id="firstName" 
                    type="text" 
                    autoComplete="off"
                    name="firstName"
                    value = {formData.firstName}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    id="lastName" 
                    type="text" 
                    autoComplete="off"
                    name="lastName"
                    value = {formData.lastName}
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
            <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Add New Product"}</Button>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
        </Form>
    )
}

export default NewCustomerForm;