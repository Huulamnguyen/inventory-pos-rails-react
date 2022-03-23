import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UpdateCategoryForm({category, setDisplayedCategory, setShowUpdateCategoryForm}){
    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: category.name,
        description: category.description
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }


    function handleSubmit(e){
        e.preventDefault();
        const updatedCategory = {
            name: formData.name,
            description: formData.description
        }

        fetch(`/categories/${category.id}`,{
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(updatedCategory)
        }).then(r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then(category => setDisplayedCategory(category)).then(setShowUpdateCategoryForm(false))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }


    return (
        <div className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Category Name</Form.Label>
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
export default UpdateCategoryForm;