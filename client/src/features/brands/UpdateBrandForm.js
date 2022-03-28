import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UpdateBrandForm({displayedBrand, setDisplayedBrand, setShowUpdateBrandForm}){

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: displayedBrand.name,
        description: displayedBrand.description
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        const updatedBrand = {
            name: formData.name,
            description: formData.description
        }
        fetch(`/brands/${displayedBrand.id}`, {
            method: 'PATCH',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedBrand)
        }).then(r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then(brand => setDisplayedBrand(brand)).then(setShowUpdateBrandForm(false))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Brand Name</Form.Label>
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
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        id="description" 
                        type="text" 
                        autoComplete="off"
                        name="description"
                        value = {formData.description}
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

export default UpdateBrandForm;