import React, { useState }  from 'react';
import {Form, Button, Alert } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import {storeAdded} from './storesSlice';

function NewStoreForm({user, setShowNewStoreForm, stores}){
    const [storeName, setStoreName] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    function handleSubmitNewStore(e){
        e.preventDefault();
        const newStore = {
            store_name: storeName,
            address: address,
            user_id: user.id
        }
        fetch("/stores", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStore)
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(store => dispatch(storeAdded(store))).then(setShowNewStoreForm(false))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return (
        <Form onSubmit={handleSubmitNewStore}>
            <Form.Group className="mb-3">
                <Form.Label>Store Name</Form.Label>
                <Form.Control 
                        id="store_name" 
                        type="text" 
                        placeholder="Enter New Store Name" 
                        autoComplete="off"
                        value = {storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                        id="address" 
                        type="text" 
                        placeholder="Enter Address" 
                        autoComplete="off"
                        value = {address}
                        onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>
            <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Add New Store"}</Button>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
        </Form>
    )
}

export default NewStoreForm;