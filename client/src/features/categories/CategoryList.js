import React, {useState} from 'react';
import {Accordion, Button} from 'react-bootstrap';
import CategoryAccordionItem from './CategoryAccordionItem';
import NewCategoryForm from './NewCategoryForm';

function CategoryList({categories, products, categoryProducts}) {

    const [showNewCategoryForm, setShowNewCategoryForm] = useState(false)

    return (
        <>
        <Accordion>
            {categories.map(category => <CategoryAccordionItem key={category.id} category={category} products={products} categoryProducts={categoryProducts} />)}
        </Accordion>
        <Button onClick={() => setShowNewCategoryForm(!showNewCategoryForm)} className="mt-3" variant="outline-dark">{showNewCategoryForm ? "Cancel" : "Add New Category"}</Button>
        {showNewCategoryForm ? <NewCategoryForm setShowNewCategoryForm={setShowNewCategoryForm}/> : null}
        </>
    )
}

export default CategoryList;