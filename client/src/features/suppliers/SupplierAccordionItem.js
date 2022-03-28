import React from 'react';
import {Accordion, ListGroup, Alert, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function SupplierAccordionItem({supplier, products}){
    const productsWithSupplier = products.filter(p => p.suppliers.find(s => s.id === supplier.id))

    return (
        <Accordion.Item key={supplier.id} eventKey={supplier.id}>
            <Accordion.Header>{supplier.name}</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ol" numbered>
                    {productsWithSupplier.map(p => 
                        <ListGroup.Item key={p.id} as="li">
                            <Link className="full" to={`/product/${p.id}`} state={p}>{p.title}</Link>
                            <Button value={p.id} className="m-3 btn-sm" variant="outline-dark">Remove</Button>
                        </ListGroup.Item>
                        )}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
        
    )
}
export default SupplierAccordionItem;