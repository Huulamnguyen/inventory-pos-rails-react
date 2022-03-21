import React, { useState } from 'react';
import {Form, Button, Alert } from 'react-bootstrap';

function ProductUpdateForm({product, setDisplayedProduct, setShowProductUpdateFrom}){

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: product.title,
        description: product.description,
        inventory: product.inventory,
        retail_price: product.retail_price,
        SKU: product.SKU,
        image: product.image
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }


    function handleSubmit(e) {
        e.preventDefault();

        const updatedProduct = {
            title: formData.title,
            description: formData.description,
            inventory: formData.inventory,
            retail_price: formData.retail_price,
            SKU: formData.SKU,
            image: formData.image
        }
        fetch(`/products/${product.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedProduct)
        }).then(r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then( product => setDisplayedProduct(product)).then(setShowProductUpdateFrom(false))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    id="title" 
                    type="text" 
                    autoComplete="off"
                    name="title"
                    value = {formData.title}
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
            <Form.Group className="mb-3">
                <Form.Label>Inventory</Form.Label>
                <Form.Control 
                    id="inventory" 
                    type="number" 
                    autoComplete="off"
                    name="inventory"
                    value = {formData.inventory}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Retail Price</Form.Label>
                <Form.Control 
                    id="retailPrice" 
                    type="number" 
                    autoComplete="off"
                    name="retail_price"
                    value = {formData.retail_price}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control 
                    id="sku" 
                    type="text" 
                    autoComplete="off"
                    name="SKU"
                    value = {formData.SKU}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                    id="image" 
                    type="text" 
                    autoComplete="off"
                    name="image"
                    value = {formData.image}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
        </Form>
    )
}
export default ProductUpdateForm;