import React, {useState, useEffect} from 'react';
import {Tabs, Tab, Container, Button, Row, Col} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import ProductList from './ProductList';
import CategoryList from '../../components/CategoryList';
import { useSelector, useDispatch } from "react-redux";
import {fetchProducts} from "./productsSlice";

function ProductPage({user}){
    const [defaultTab, setDefaultTab] = useState('product');
    const navigate = useNavigate();
    const storeId = parseInt(useParams().id);
    const store = user.stores.find(store => store.id === storeId);
    const [categories, setCategories] = useState([]);

    // Get products state from productsReducer
    const products = useSelector( state => state.products.entities.filter(product => product.store.id === store.id))
    // Get fetchProducts action from productsReducer
    const dispatch = useDispatch();
    
    function loadAllProducts(){
        dispatch(fetchProducts());
    }

    function loadAllCategories(){
        fetch("/categories")
        .then(r => {
            if(r.ok){
                r.json().then(categories => setCategories(categories))
            }
        })
    }

    useEffect(() => {
        loadAllProducts();
        loadAllCategories();
    }, [dispatch])

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">You're interacting with {store.store_name} store</div></Col>
                {/* <Col xs="auto"><Button className="mt-2" variant="outline-dark">Sale</Button></Col> */}
            </Row>
            <Row>
                <Tabs id="controlled-tab" activeKey={defaultTab} onSelect={(k) => setDefaultTab(k)} className="mb-3">
                    <Tab eventKey="product" title="Product">
                        <ProductList products={products} storeId={storeId} categories={categories}/>
                    </Tab>
                    <Tab eventKey="categories" title="Categories">
                        <CategoryList products={products} categories={categories}/>
                    </Tab>
                    <Tab eventKey="brand" title="Brand">
                        <p>Brand List</p>
                    </Tab>
                    <Tab eventKey="supplier" title="Suppliers">
                        <p>Supplier List</p>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )
}

export default ProductPage;