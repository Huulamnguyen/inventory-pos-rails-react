import React from 'react';
import {Accordion, ListGroup, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CategoryAccordionItem({category, products}){
    const productsWithCategory = products.filter(product => product.categories.find(c => c.id === category.id))
    return (
        <Accordion.Item key={category.id} eventKey={category.id}>
            <Accordion.Header>{category.name} has {category.products.length} product(s)</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ol" numbered>
                    {productsWithCategory.map(p => 
                                                    <ListGroup.Item key={p.id} as="li">
                                                        <Link to={`/products/${p.id}`} state={p}>{p.title}</Link>
                                                    </ListGroup.Item>)}
                </ListGroup>
                <ButtonGroup className="mt-3">
                    <Button variant="outline-dark">Detail</Button>
                    <Button variant="outline-dark">Update</Button>
                    <Button variant="outline-dark">Delete</Button>
                </ButtonGroup>
            </Accordion.Body>
        </Accordion.Item>
    )   
}
export default CategoryAccordionItem;