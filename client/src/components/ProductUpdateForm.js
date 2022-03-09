import React, { useState } from 'react';
import {Form, Button, Alert } from 'react-bootstrap';

function ProductUpdateForm({product, setDisplayedProduct, setShowProductUpdateFrom}){

    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [inventory, setInventory] = useState(product.inventory);
    const [retailPrice, setRetailPrice] = useState(product.retail_price);
    const [sku, setSku] = useState(product.SKU);
    const [image, setImage] = useState(product.image);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const updatedProduct = {
            title: title,
            description: description,
            inventory: inventory,
            retail_price: retailPrice,
            SKU: sku,
            image: image
        }
        console.log(updatedProduct)
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
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    id="description" 
                    type="text" 
                    autoComplete="off"
                    value = {description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Inventory</Form.Label>
                <Form.Control 
                    id="inventory" 
                    type="number" 
                    autoComplete="off"
                    value = {inventory}
                    onChange={(e) => setInventory(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Retail Price</Form.Label>
                <Form.Control 
                    id="retailPrice" 
                    type="float" 
                    autoComplete="off"
                    value = {retailPrice}
                    onChange={(e) => setRetailPrice(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control 
                    id="sku" 
                    type="text" 
                    autoComplete="off"
                    value = {sku}
                    onChange={(e) => setSku(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                    id="image" 
                    type="text" 
                    autoComplete="off"
                    value = {image}
                    onChange={(e) => setImage(e.target.value)}
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