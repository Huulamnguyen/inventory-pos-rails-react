import React from 'react';
import {Accordion, ListGroup, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function BrandAccordionItem({brand, products}){

    const productsWithBrand = products.filter(product => product.brands.find(b => b.id === brand.id))
    console.log(productsWithBrand)
    // console.log(brand)

    return (
        <Accordion.Item key={brand.id} eventKey={brand.id}>
            <Accordion.Header>{brand.name}</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ol" numbered>
                    {productsWithBrand.map(p => 
                            <ListGroup.Item key={p.id} as="li">
                                <Link className="full" to={`/products/${p.id}`} state={p}>{p.title}</Link>
                                {/* <Button className="m-3 btn-sm" value={p.id} onClick={e => handleRemove(e)}variant="outline-dark">Remove</Button> */}
                            </ListGroup.Item>
                        )}
                </ListGroup>
                <Link to={`/brands/${brand.id}`} state={brand}>
                    <Button className="mt-3" variant="outline-dark">Detail</Button>
                </Link>
            </Accordion.Body>
        </Accordion.Item>
    )
}
export default BrandAccordionItem;