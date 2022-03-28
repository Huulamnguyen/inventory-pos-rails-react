import React, {useState} from 'react';
import {ListGroup, Button, Alert} from 'react-bootstrap';

function AllProducts({displayedBrand, allProducts}){

    const [errors, setErrors] = useState([]);
    const [showAddedAlert, setShowAddedAlert] = useState(false)

    function handleClick(e){
        const newBrandProduct = {
            brand_id: displayedBrand.id,
            product_id: e.target.value
        }
        fetch("/brand_products", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newBrandProduct)
        }).then(r => {
            if(r.ok){
                r.json().then(newBrandProduct).then(setShowAddedAlert(true))
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="mt-3">
            <p>Add products to this {displayedBrand.name} brand</p>
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