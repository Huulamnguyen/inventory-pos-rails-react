import React from 'react';
import {Accordion, Button, ListGroup} from 'react-bootstrap';
import BrandAccordionItem from './BrandAccordionItem';

function BrandList({brands, products}){

    return (
        <>
        <Accordion>
            {brands.map(brand => <BrandAccordionItem key={brand.id} brand={brand} products={products}/>)}
        </Accordion>
        </>
    )
}

export default BrandList;