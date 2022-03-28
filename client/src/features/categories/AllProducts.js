import React, {useState} from 'react';
import {ListGroup, Button, Alert} from 'react-bootstrap';


function AllProducts({category, products}){

    const [errors, setErrors] = useState([]);
    const [showAddedAlert, setShowAddedAlert] = useState(false)

    function handleClick(e){
        const newCategoryProduct = {
            category_id: category.id,
            product_id: e.target.value
        }
        fetch("/category_products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCategoryProduct)
        }).then(r => {
            if(r.ok){
                r.json().then(newCategoryProduct).then(setShowAddedAlert(!showAddedAlert))
            }else{
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div className="mt-3">
            <p>Add products to this category</p>
            {errors.map(error => (
                <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
            ))}
            {showAddedAlert ? <Alert className="mt-3" variant="success">Product Added</Alert> : null}
            <ListGroup>
                {products.map(product => 
                                        <ListGroup.Item key={product.id}>
                                            {product.title} 
                                            <Button className="m-3 btn-sm" value={product.id} onClick={e => handleClick(e)}variant="outline-dark">Add</Button>
                                        </ListGroup.Item>)}
            </ListGroup>
        </div>
    )
}
export default AllProducts;