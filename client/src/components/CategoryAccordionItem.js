import React from 'react';
import {Accordion, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CategoryAccordionItem({category}){

    return (
        <Accordion.Item key={category.id} eventKey={category.id}>
            <Accordion.Header>{category.name} has {category.products.length} product(s)</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ol" numbered>
                    {category.products.map(product => 
                                                    <ListGroup.Item key={product.id} as="li">{product.title}
                                                        <Link to={`/products/${product.id}`} state={product}>Detail</Link>
                                                    </ListGroup.Item>)}
                </ListGroup>
            </Accordion.Body>
            
        </Accordion.Item>   
    )
}

export default CategoryAccordionItem;