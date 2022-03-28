import React, {useState} from 'react';
import {Accordion, ListGroup, Alert, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function BrandAccordionItem({brand, products, brandProducts}){
    // const filteredBrandProducts = brandProducts.filter(brandProduct => console.log(brandProduct))
    const productsWithBrand = products.filter(product => product.brands.find(b => b.id === brand.id))
    
    const [showRemovedMessage, setShowRemovedMessage] = useState(false)
    function handleRemove(e){
        const brandProduct = brandProducts.find(brandProduct => brandProduct.product.id == e.target.value && brandProduct.brand.id == brand.id)
        console.log(brandProduct)
        fetch(`/brand_products/${brandProduct.id}`, {
            method: "DELETE"
        }).then(setShowRemovedMessage(true))
    }

    return (
        <Accordion.Item key={brand.id} eventKey={brand.id}>
            <Accordion.Header>{brand.name}</Accordion.Header>
            <Accordion.Body>
                {showRemovedMessage ? <Alert className="mt-3" variant="danger" >Product has been removed successfully</Alert> : null}
                <ListGroup as="ol" numbered>
                    {productsWithBrand.map(p => 
                            <ListGroup.Item key={p.id} as="li">
                                <Link className="full" to={`/product/${p.id}`} state={p}>{p.title}</Link>
                                <Button value={p.id} onClick={e => handleRemove(e)} className="m-3 btn-sm" variant="outline-dark">Remove</Button>
                            </ListGroup.Item>
                        )}
                </ListGroup>
                <Link 
                    to={`/brand/${brand.id}`}
                    state={{brand: brand, allProducts: products}}
                    >
                    <Button className="mt-3" variant="outline-dark">Detail</Button>
                </Link>
            </Accordion.Body>
        </Accordion.Item>
    )
}
export default BrandAccordionItem;