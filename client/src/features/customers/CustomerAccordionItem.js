import React, {useState} from 'react';
import {ButtonGroup, Button, Accordion} from 'react-bootstrap';
import CustomerUpdateForm from './CustomerUpdateForm';
import CustomerSaleList from './CustomerSaleList';

function CustomerAccordionItem({customer, allCustomers, setAllCustomers}){
    const [displayedCustomer, setDisplayedCustomer] = useState(customer);
    const [showCustomerEditForm, setShowCustomerEditForm] = useState(false);

    // console.log(allCustomers)
    function handleDelete(){
        fetch(`/customers/${customer.id}`, {
            method: "DELETE"
        })
            .then(r=>{
                if(r.ok){
                    setAllCustomers([...allCustomers].filter(customer => customer.id !== displayedCustomer.id))
                }
            })
    }

    return (
        <Accordion.Item key={displayedCustomer.id} eventKey={displayedCustomer.id}>
            <Accordion.Header>Name: {displayedCustomer.first_name} {displayedCustomer.last_name}</Accordion.Header>
            <Accordion.Body>
                <p>Address: {displayedCustomer.address}</p>
                <p>Address: {displayedCustomer.phone}</p>
                <p>{displayedCustomer.sales.length > 0 ? <CustomerSaleList sales={displayedCustomer.sales} /> : "Have No Sale"}</p>
                <ButtonGroup className="mb-3" size="sm">
                    <Button onClick={() => setShowCustomerEditForm(!showCustomerEditForm)} variant="outline-dark">{showCustomerEditForm? "Cancel" :"Edit"}</Button>
                    <Button onClick={handleDelete} variant="outline-dark">Delete</Button>
                </ButtonGroup>
                {/* {showUpdateStoreForm ? <UpdateStoreForm store={displayedStore} setDisplayedStore={setDisplayedStore} setShowUpdateStoreForm={setShowUpdateStoreForm} /> : null} */}
                {showCustomerEditForm ? <CustomerUpdateForm displayedCustomer={displayedCustomer} setDisplayedCustomer={setDisplayedCustomer} setShowCustomerEditForm={setShowCustomerEditForm} /> : null}
            </Accordion.Body>
        </Accordion.Item>
    )
}
export default CustomerAccordionItem;