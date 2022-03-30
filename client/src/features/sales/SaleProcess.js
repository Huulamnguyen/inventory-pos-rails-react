import React from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import SaleDetailItem from './SaleDetailItem';
import {Link} from 'react-router-dom';

function SaleProcess({currentSale, saleDetails, setSaleDetails}){

    return (
        <Card>
            <Card.Header>Sale Details: #{currentSale.id}</Card.Header>
            <Card.Body>
                <ListGroup>{saleDetails.map(sale_detail => <SaleDetailItem saleDetails={saleDetails} setSaleDetails={setSaleDetails} sale_detail={sale_detail}/>)}</ListGroup>
            </Card.Body>

            <div className="m-auto mw-100 mb-3">
                <Link 
                    to={`/sale/${currentSale.id}/checkout`}
                    state={{sale: currentSale}}
                >
                    <Button variant="outline-dark">Checkout</Button>
                </Link>
            </div>
            
        </Card>
            // <br></br>
            // <li>Total Quantity: {currentSale.total_quantity}</li>
            // <li>Total Price: {currentSale.total_price}</li>
            // <li>Tax Percent: {currentSale.tax}</li>
            // <li>Tax Amount: {currentSale.tax_amount}</li>
            // <li>Total: {currentSale.total_amount}</li>
    )
}
export default SaleProcess;