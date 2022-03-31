import React from 'react';
import {ListGroup} from "react-bootstrap";

function ProductSaleHistory({sales}){

    console.log(sales)

    return (
        <>
        {sales.length > 0 ? (
            <ListGroup>
                {sales.map(sale => <ListGroup.Item key={sale.id}>Sale #{sale.id} - Total: ${sale.total_amount} - Quantity: {sale.total_quantity}</ListGroup.Item>)}
            </ListGroup>
        ): "No Sale History"}
        </>
    )
}

export default ProductSaleHistory;