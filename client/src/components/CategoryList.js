import React from 'react';
import {Accordion} from 'react-bootstrap';
import CategoryAccordionItem from './CategoryAccordionItem';

function CategoryList({categories}) {
    return (
        <Accordion>
            {categories.map(category => <CategoryAccordionItem key={category.id} category={category} />)}
        </Accordion>
    )
}

export default CategoryList;