import React, {useState} from 'react';
import {ListGroup, Button, Alert} from 'react-bootstrap';

function SaleDetailItem({sale_detail, setSaleDetails, saleDetails}){

    const [quantity, setQuantity] = useState(sale_detail.quantity)
    const [showError, setShowError] = useState(false);

    function handleAdd(sale_detail){
        console.log(sale_detail)
        fetch(`/sale_details/${sale_detail.id}`, {
            method: 'PATCH',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                quantity: ++sale_detail.quantity
            })
        }).then(r=>r.json()).then(sale_detail => sale_detail).then(setQuantity(quantity +1))

        fetch(`/products/${sale_detail.product.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                inventory: sale_detail.product.inventory - sale_detail.quantity
            })
        }).then(r=>{
            if(r.ok){
                r.json()
            } else {
                r.json().then(setShowError(!showError))
            }
        })
    }

    function handleMinus(sale_detail){
        fetch(`/sale_details/${sale_detail.id}`, {
            method: 'PATCH',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                quantity: sale_detail.quantity - 1
            })
        }).then(r=>r.json()).then(sale_detail => sale_detail).then(setQuantity(quantity - 1))
        
        fetch(`/products/${sale_detail.product.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                inventory: sale_detail.product.inventory + sale_detail.quantity
            })
        }).then(r=>r.json())
    }

    function handleDelete(sale_detail){
        console.log(sale_detail.id)
        fetch(`/sale_details/${sale_detail.id}`, {
            method: "DELETE",
        }).then(setSaleDetails([...saleDetails].filter(saleDetail => saleDetail.id !== sale_detail.id)))

        fetch(`/products/${sale_detail.product.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                inventory: sale_detail.product.inventory + sale_detail.quantity
            })
        }).then(r=>r.json())
    }

    return(
        <ListGroup.Item key={sale_detail.id}>
                            {showError ? <Alert className="mt-3" variant="danger" >Inventory is not enough</Alert> : null}
                            <p>{sale_detail.product.title}</p> 
                            <p>
                                qty: {quantity} - Retail Price: ${sale_detail.product.retail_price} - total: ${quantity*sale_detail.product.retail_price}
                                </p>
                                {showError ? null : <Button onClick={() => handleAdd(sale_detail)} variant="outline-dark">+</Button>} 
                                {quantity > 0 ? <Button onClick={() => handleMinus(sale_detail)} className="mx-1" variant="outline-dark">-</Button> : null}
                                <Button onClick={() => handleDelete(sale_detail)} variant="outline-danger">x</Button>
        </ListGroup.Item>
    )
}

export default SaleDetailItem;