import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';

function SaleProductList({saleProducts, handleAddProduct}){

    return (
        <ListGroup className="mt-3">
            {saleProducts.map(p => 
                <ListGroup.Item action key={p.id}>
                    {p.title}
                    <Button onClick={() => handleAddProduct(p)} className="mx-3 btn-sm" variant="outline-dark">+</Button>
                </ListGroup.Item>)}
        </ListGroup>
    )
}

export default SaleProductList;