import React from 'react';
import {Accordion} from 'react-bootstrap';
import CategoryAccordionItem from './CategoryAccordionItem';

function CategoryList({categories, products}) {
    return (
        <Accordion>
            {categories.map(category => <CategoryAccordionItem key={category.id} category={category} products={products} />)}
        </Accordion>
    )
}

export default CategoryList;