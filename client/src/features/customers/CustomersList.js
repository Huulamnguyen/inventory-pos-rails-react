import React,{useState, useEffect} from 'react';
import {Container, Row, Col, Button, Accordion} from 'react-bootstrap';
import {useNavigate, useLocation} from 'react-router-dom';
import CustomerAccordionItem from './CustomerAccordionItem';
import ANewCustomerForm from './ANewCustomerForm';

function CustomersList(){
    const location = useLocation()
    const store = location.state.store
    const navigate = useNavigate();

    const [allCustomers, setAllCustomers] = useState([]);
    const [showNewCustomerForm, setShowNewCustomerForm] = useState(false)

    function loadAllCustomer(){
        fetch('/customers')
            .then(r=>r.json())
            .then(customersData => setAllCustomers(customersData))
    }
    
    useEffect(() => {
        loadAllCustomer();
    },[]);

    return (
        
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">Customers</div></Col>
            </Row>
            <Accordion>
                {allCustomers.map(customer => <CustomerAccordionItem key={customer.id} customer={customer} allCustomers={allCustomers} setAllCustomers={setAllCustomers}/>)}
            </Accordion>
            <Button onClick={() => setShowNewCustomerForm(!showNewCustomerForm)} className="mt-3 btn-sm" variant="outline-dark">{showNewCustomerForm ? "Cancel" : "Add New Customer"}</Button>
        {showNewCustomerForm ? <ANewCustomerForm  store={store} allCustomers={allCustomers} setAllCustomers={setAllCustomers} setShowNewCustomerForm={setShowNewCustomerForm}/> : null}
        </Container>
    )
}

export default CustomersList;