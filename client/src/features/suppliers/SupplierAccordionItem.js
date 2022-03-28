import React, {useState} from 'react';
import {Accordion, ListGroup, Alert, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function SupplierAccordionItem({supplier, products, supplierProducts}){
    const productsWithSupplier = products.filter(p => p.suppliers.find(s => s.id === supplier.id))

    const [showRemovedMessage, setShowRemovedMessage] = useState(false)
    function handleRemove(e){
        const supplierProduct = supplierProducts.find(supplierProduct => supplierProduct.product.id == e.target.value && supplierProduct.supplier.id == supplier.id)
        fetch(`/supplier_products/${supplierProduct.id}`, {
            method: "DELETE",
        }).then(setShowRemovedMessage(true))
    }

    return (
        <Accordion.Item key={supplier.id} eventKey={supplier.id}>
            <Accordion.Header>{supplier.name}</Accordion.Header>
            <Accordion.Body>
            {showRemovedMessage ? <Alert className="mt-3" variant="danger" >Product has been removed successfully</Alert> : null}
                <ListGroup as="ol" numbered>
                    {productsWithSupplier.map(p => 
                        <ListGroup.Item key={p.id} as="li">
                            <Link className="full" to={`/product/${p.id}`} state={p}>{p.title}</Link>
                            <Button value={p.id} onClick={e => handleRemove(e)} className="m-3 btn-sm" variant="outline-dark">Remove</Button>
                        </ListGroup.Item>
                        )}
                </ListGroup>
                <Link
                    to={`/supplier/${supplier.id}`}
                    state={{supplier: supplier, allProducts: products}}
                >
                <Button className="mt-3" variant="outline-dark">Detail</Button>
                </Link>
            </Accordion.Body>
        </Accordion.Item>
        
    )
}
export default SupplierAccordionItem;