import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UpdateSupplierForm({displayedSupplier, setDisplayedSupplier, setShowUpdateSupplierForm}){
    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: displayedSupplier.name,
        address: displayedSupplier.address,
        phone: displayedSupplier.phone,
        email: displayedSupplier.email
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        const updatedSupplier = {
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            email: formData.email
        }
        fetch(`/suppliers/${displayedSupplier.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedSupplier)
        }).then(r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then(supplier => setDisplayedSupplier(supplier)).then(setShowUpdateSupplierForm(false))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control 
                        id="categoryName" 
                        type="text" 
                        autoComplete="off"
                        name="name"
                        value = {formData.name}
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
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        id="email" 
                        type="text" 
                        autoComplete="off"
                        name="email"
                        value = {formData.email}
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

export default UpdateSupplierForm;