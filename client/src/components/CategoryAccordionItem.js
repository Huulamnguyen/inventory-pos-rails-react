import React from 'react';
import {Accordion, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CategoryAccordionItem({category, products}){
    const productsWithCategory = products.filter(product => product.categories.find(c => c.id === category.id))
    return (
        <Accordion.Item key={category.id} eventKey={category.id}>
            <Accordion.Header>{category.name} has {category.products.length} product(s)</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ol" numbered>
                    {productsWithCategory.map(p => 
                                                    <ListGroup.Item key={p.id} as="li">{p.title}
                                                        <Link to={`/products/${p.id}`} state={p}>Detail</Link>
                                                    </ListGroup.Item>)}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    )   
}
export default CategoryAccordionItem;