import React, { useState } from 'react';
import {Form, Button, Alert, Container, Row, Col} from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {productAdded} from "./productsSlice";

function NewProductForm () {
    const location = useLocation()
    const storeId = location.state
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        inventory: "",
        retailPrice: "",
        sku: "",
        image: ""
    });

    const dispatch = useDispatch();

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        const newProduct = {
            title: formData.title,
            description: formData.description,
            inventory: formData.inventory,
            retail_price: formData.retailPrice,
            SKU: formData.sku,
            image: formData.image,
            store_id: storeId
        }

        fetch("/products", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newProduct)
        }).then(r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then(product => dispatch(productAdded(product))).then(navigate(-1))
            }else{
                r.json().then(err => setErrors(err.errors))
            }
        })

        setFormData({
            title: "",
            description: "",
            inventory: "",
            retailPrice: "",
            sku: "",
            image: ""
        })
    }
    

    return (
        <Container>
        <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">Add New Product</div></Col>
                {/* <Col xs="auto"><Button className="mt-2" variant="outline-dark">Sale</Button></Col> */}
        </Row>
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
                    name="retailPrice"
                    value = {formData.retailPrice}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control 
                    id="sku" 
                    type="text" 
                    autoComplete="off"
                    name="sku"
                    value = {formData.sku}
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
            <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Add New Product"}</Button>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
        </Form>
        </Container>
    )
}

export default NewProductForm;