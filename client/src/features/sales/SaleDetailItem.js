import React, {useState} from 'react';
import {ListGroup, Button, Alert, Form, InputGroup} from 'react-bootstrap';

function SaleDetailItem({sale_detail, setSaleDetails, saleDetails}){

    const [quantity, setQuantity] = useState(sale_detail.quantity)
    const [showError, setShowError] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [saleQuantity, setSaleQuantity] = useState(0)
    const [updatedSaleDetail, setUpdatedSaleDetail] = useState(sale_detail);

    function handleAdd(e){
        e.preventDefault();
        console.log(saleQuantity)
        fetch(`/sale_details/${sale_detail.id}`, {
            method: 'PATCH',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                quantity: saleQuantity
            })
        }).then(r=>r.json()).then(saleDetail => setUpdatedSaleDetail(saleDetail)).then(setQuantity(saleQuantity)).then(setShowEditForm(false))
            
        fetch(`/products/${sale_detail.product.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                inventory: sale_detail.product.inventory - saleQuantity
            })
        }).then(r=>{
            if(r.ok){
                r.json()
            } else {
                r.json().then(setShowError(!showError))
            }
        })
    }

    function handleDelete(){
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
            <p> qty: {quantity} - Retail Price: ${sale_detail.product.retail_price} - total: ${quantity*sale_detail.product.retail_price}</p>
            {showEditForm ? (            
            <Form onSubmit={handleAdd}>
                <InputGroup>
                    <Form.Control 
                        value={saleQuantity} 
                        onChange={(e) => {
                            setSaleQuantity(e.target.value)
                            setQuantity(e.target.value)
                        }} 
                        name="quantity" type="number" placeholder="Quantity..." size="sm" />
                    <Button size="sm" variant="outline-dark" type="submit" >Done</Button>
                    <Button onClick={handleDelete} size="sm" variant="outline-danger">x</Button>
                </InputGroup>
            </Form>
            ): <Button size="sm" variant="outline-dark" onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>}
        </ListGroup.Item>
    )
}
export default SaleDetailItem;