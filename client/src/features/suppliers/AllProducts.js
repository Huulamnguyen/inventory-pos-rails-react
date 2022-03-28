import React, {useState} from 'react';
import {ListGroup, Button, Alert} from 'react-bootstrap';

function AllProducts({displayedSupplier, allProducts}){

    const [errors, setErrors] = useState([]);
    const [showAddedAlert, setShowAddedAlert] = useState(false)

    function handleClick(e){
        const newSupplierProduct = {
            supplier_id: displayedSupplier.id,
            product_id: e.target.value
        }

        fetch("/supplier_products", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newSupplierProduct)
        }).then(r => {
            if(r.ok){
                r.json().then(newSupplierProduct).then(setShowAddedAlert(true))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }


    return (
        <div className="mt-3">
            <p>Add products to this {displayedSupplier.name} brand</p>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
            {showAddedAlert ? <Alert className="mt-3" variant="success">Product Added Successful</Alert> : null}
            <ListGroup className="mt-3">
                {allProducts.map(p => 
                    <ListGroup.Item key={p.id}>
                        {p.title}
                        <Button className="m-3 btn-sm" value={p.id} onClick={e => handleClick(e)} variant="outline-dark">Add</Button>
                    </ListGroup.Item>)}
            </ListGroup>
        </div>
    )
}

export default AllProducts;