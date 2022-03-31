import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';

function SaleCustomerDetail({sale}){
    return (
        <>
        <ListGroup>
            <p className="fs-2 mt-3">Customer</p>
            <ListGroup.Item>First Name: {sale.customer.first_name}</ListGroup.Item>
            <ListGroup.Item>Last name: {sale.customer.last_name}</ListGroup.Item>
            <ListGroup.Item>Address: {sale.customer.address}</ListGroup.Item>
            <ListGroup.Item>Phone: {sale.customer.phone}</ListGroup.Item>
        </ListGroup>
        <Button className="mt-3" size="sm" variant="outline-dark">Detail</Button>
        </>
    )
}
export default SaleCustomerDetail;