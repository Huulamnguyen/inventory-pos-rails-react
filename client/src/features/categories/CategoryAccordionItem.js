import React, {useState} from 'react';
import {Accordion, ListGroup, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CategoryDetail from './CategoryDetail';
import UpdateCategoryForm from './UpdateCategoryForm';
import { useDispatch } from 'react-redux';
import { categoryRemoved } from "./categoriesSlice";

function CategoryAccordionItem({category, products}){

    const [showCategoryDetail, setShowCategoryDetail] = useState(false)
    const [showUpdateCategoryForm, setShowUpdateCategoryForm] = useState(false)
    const [displayedCategory, setDisplayedCategory] = useState(category)

    const productsWithCategory = products.filter(product => product.categories.find(c => c.id === category.id))

    const dispatch = useDispatch()
    function handleDelete(){
        fetch(`/categories/${category.id}`, {
            method: "DELETE"
        }).then(r => {
            if(r.ok){
                dispatch(categoryRemoved(category.id))
            }
        })
    }
        
    return (
        <Accordion.Item key={displayedCategory.id} eventKey={displayedCategory.id}>
            <Accordion.Header>{displayedCategory.name}</Accordion.Header>
            <Accordion.Body>
                <div>
                    <p>{displayedCategory.products.length} products</p>
                </div>
                <ListGroup as="ol" numbered>
                    {productsWithCategory.map(p => 
                                                    <ListGroup.Item key={p.id} as="li">
                                                        <Link to={`/products/${p.id}`} state={p}>{p.title}</Link>
                                                    </ListGroup.Item>)}
                </ListGroup>
                <ButtonGroup className="mt-3">
                    <Button onClick={() => {setShowCategoryDetail(!showCategoryDetail)
                                            setShowUpdateCategoryForm(false)} } 
                            variant="outline-dark">
                        {showCategoryDetail ? "Cancel" : "Detail"}
                    </Button>
                    <Button onClick={() => {setShowUpdateCategoryForm(!showUpdateCategoryForm)
                                            setShowCategoryDetail(false)} } 
                            variant="outline-dark">
                        {showUpdateCategoryForm ? "Cancel" : "Update"}
                        </Button>
                    <Button onClick={handleDelete} variant="outline-dark">Delete</Button>
                </ButtonGroup>

                {/* Show Category Detail */}
                {showCategoryDetail ? <CategoryDetail category={displayedCategory}/> : null}
                {/* Show Category Update Form */}
                {showUpdateCategoryForm ? <UpdateCategoryForm category={displayedCategory} setDisplayedCategory={setDisplayedCategory} setShowUpdateCategoryForm={setShowUpdateCategoryForm}/> : null }
            </Accordion.Body>
        </Accordion.Item>
    )   
}
export default CategoryAccordionItem;