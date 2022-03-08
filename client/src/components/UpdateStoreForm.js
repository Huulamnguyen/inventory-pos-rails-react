import React, { useState } from 'react';
import {Form, Button, Alert } from 'react-bootstrap'

function UpdateStoreForm({store, setShowUpdateStoreForm, setDisplayedStore}){

    const [storeName, setStoreName] = useState(store.store_name);
    const [address, setAddress] = useState(store.address);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        const updatedStore = {
            store_name: storeName,
            address: address
        }
        fetch(`/stores/${store.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedStore)
        }).then(r => {
            setIsLoading(false);
            if(r.ok){
                r.json().then(store => setDisplayedStore(store)).then(setShowUpdateStoreForm(false))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control 
                        id="storeName" 
                        type="text" 
                        autoComplete="off"
                        value = {storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    id="address" 
                    type="text" 
                    autoComplete="off" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>
            <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
        </Form>
    )
}

export default UpdateStoreForm;