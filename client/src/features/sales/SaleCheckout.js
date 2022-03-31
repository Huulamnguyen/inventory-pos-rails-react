import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, ListGroup, ButtonGroup} from 'react-bootstrap';
import NewCustomerForm from '../customers/NewCustomerForm';
import SaleCustomerDetail from './SaleCustomerDetail';
import SaleAllCustomersList from './SaleAllCustomersList';

function SaleCheckout(){
    const navigate = useNavigate();
    const location = useLocation();
    const sale = location.state.sale
    const [showAddCustomerForm, setShowCustomerForm] = useState(false)
    const [showAllCustomersList, setShowAllCustomersList] = useState(false)
    // const [allCustomers, setAllCustomers] = useState([]);

    // function loadAllCustomer(){
    //     fetch('/customers')
    //         .then(r=>r.json())
    //         .then(customersData => setAllCustomers(customersData))
    // }
    
    // useEffect(() => {
    //     loadAllCustomer();
    // },[]);

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">Sale Checkout: #{sale.id}</div></Col>
            </Row>
            <Row>
                <Col>
                    <p className="fs-2 mt-3">Products:</p>
                    <ListGroup>
                        {sale.sale_details.map(sale_detail => 
                            <ListGroup.Item key={sale_detail.id}>{sale_detail.quantity} {sale_detail.product.title} - Total: ${sale_detail.quantity*sale_detail.product.retail_price}</ListGroup.Item>
                        )}
                    </ListGroup>
                    <p className="fs-2 mt-3">Summary:</p>
                    <ListGroup>
                        <ListGroup.Item>Total Quantity: <span className="fw-bolder">{sale.total_quantity}</span></ListGroup.Item>
                        <ListGroup.Item>Total Price: <span className="fw-bolder">${sale.total_price}</span></ListGroup.Item>
                        <ListGroup.Item>Tax Amount: <span className="fw-bolder">${parseFloat(sale.tax_amount).toFixed(2)}</span></ListGroup.Item>
                        <ListGroup.Item>Total: <span className="fw-bolder">${parseFloat(sale.total_amount).toFixed(2)}</span></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <ButtonGroup>
                        <Button onClick={() => {
                            setShowCustomerForm(!showAddCustomerForm)
                            setShowAllCustomersList(false)
                        }} variant="outline-dark">Add New Customer</Button>
                        <Button onClick={() => {
                            setShowAllCustomersList(!showAllCustomersList)
                            setShowCustomerForm(false)
                        }} variant="outline-dark">Select Customer</Button>
                    </ButtonGroup>
                    <div>
                        {sale.customer ? <SaleCustomerDetail sale={sale} /> : null}
                    </div>

                    {/* Add New Customer Form */}
                    {showAddCustomerForm ? <NewCustomerForm sale={sale} setShowCustomerForm={setShowCustomerForm}/> : null}
                    {/* Show all customers list */}
                    {showAllCustomersList ? <SaleAllCustomersList />: null}
                </Col> 
            </Row>

        </Container>
    )
}
export default SaleCheckout;