import React, {useState} from 'react';
import {Accordion, ListGroup, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CategoryDetail from './CategoryDetail';
import UpdateCategoryForm from './UpdateCategoryForm';
import { useDispatch } from 'react-redux';
import { categoryRemoved } from "./categoriesSlice";
import AllProducts from './AllProducts';

function CategoryAccordionItem({category, products, categoryProducts}){

    const [showCategoryDetail, setShowCategoryDetail] = useState(false)
    const [showUpdateCategoryForm, setShowUpdateCategoryForm] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [displayedCategory, setDisplayedCategory] = useState(category)

    const productsWithCategory = products.filter(product => product.categories.find(c => c.id === category.id))

    function handleRemove(e){
        const categoryProduct = categoryProducts.find(categoryProduct => categoryProduct.product.id == e.target.value && categoryProduct.category.id == category.id)
        fetch(`/category_products/${categoryProduct.id}`, {
            method: "DELETE",
        })
    }

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
                                                        <Link className="full" to={`/product/${p.id}`} state={p}>{p.title}</Link>
                                                        <Button className="m-3 btn-sm" value={p.id} onClick={e => handleRemove(e)} variant="outline-dark">Remove</Button>
                                                    </ListGroup.Item>
                                                )}
                </ListGroup>
                <ButtonGroup className="mt-3">
                    <Button className="btn-sm" onClick={() => {setShowCategoryDetail(!showCategoryDetail)
                                            setShowUpdateCategoryForm(false)
                                            setShowAllProducts(false)
                                        } } 
                            variant="outline-dark">
                        {showCategoryDetail ? "Cancel" : "Detail"}
                    </Button>
                    <Button className="btn-sm" onClick={() => {setShowUpdateCategoryForm(!showUpdateCategoryForm)
                                            setShowCategoryDetail(false)
                                            setShowAllProducts(false)
                                        } } 
                            variant="outline-dark">
                        {showUpdateCategoryForm ? "Cancel" : "Update"}
                    </Button>
                    <Button className="btn-sm" onClick={() => {setShowAllProducts(!showAllProducts)
                                            setShowUpdateCategoryForm(false)
                                            setShowCategoryDetail(false)
                                        }}
                            variant="outline-dark">Add Product</Button>
                    <Button className="btn-sm" onClick={handleDelete} variant="outline-dark">Delete</Button>
                </ButtonGroup>

                {/* Show Category Detail */}
                {showCategoryDetail ? <CategoryDetail category={displayedCategory}/> : null}
                {/* Show Category Update Form */}
                {showUpdateCategoryForm ? <UpdateCategoryForm category={displayedCategory} setDisplayedCategory={setDisplayedCategory} setShowUpdateCategoryForm={setShowUpdateCategoryForm}/> : null }
                {/* Show List of Not Added Product and add product button */}
                {showAllProducts ? <AllProducts category={displayedCategory} products={products}/> : null}
            </Accordion.Body>
        </Accordion.Item>
    )   
}
export default CategoryAccordionItem;