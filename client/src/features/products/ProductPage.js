import React, {useState, useEffect} from 'react';
import {Tabs, Tab, Container, Button, Row, Col} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import ProductList from './ProductList';
import CategoryList from '../categories/CategoryList';
import BrandList from '../brands/BrandList';
import SupplierList from '../suppliers/SupplierList';
import { useSelector, useDispatch } from "react-redux";
import {fetchProducts} from "./productsSlice";
import {fetchCategories} from "../categories/categoriesSlice";
import {fetchBrands} from "../brands/brandsSlice";
import {fetchSuppliers} from "../suppliers/suppliersSlice";

function ProductPage({user}){
    const [categoryProducts, setCategoryProducts] = useState();
    const [brandProducts, setBrandProducts] = useState();
    const [supplierProducts, setSupplierProducts] = useState();
    const navigate = useNavigate();
    const storeId = parseInt(useParams().id);
    const store = user.stores.find(store => store.id === storeId);

    // Get products state from productsReducer
    const products = useSelector( state => state.products.entities.filter(product => product.store.id === store.id))
    const categories = useSelector( state => state.categories.entities)
    const brands = useSelector( state => state.brands.entities)
    const suppliers = useSelector(state => state.suppliers.entities)

    const dispatch = useDispatch();
    
    function loadAllProducts(){
        dispatch(fetchProducts());
    }

    function loadAllCategories(){
        dispatch(fetchCategories());
    }

    function loadAllCategoryProducts(){
        fetch("/category_products")
            .then(r=>r.json())
            .then(data => setCategoryProducts(data))
    };

    function loadAllBrands(){
        dispatch(fetchBrands());
    };

    function loadAllBrandProducts(){
        fetch("/brand_products")
            .then(r=>r.json())
            .then(data => setBrandProducts(data))
    }

    function loadAllSuppliers(){
        dispatch(fetchSuppliers())
    }

    function loadAllSupplierProducts(){
        fetch("/supplier_products")
            .then(r=>r.json())
            .then(data => setSupplierProducts(data))
    }

    useEffect(() => {
        loadAllProducts();
        loadAllCategories();
        loadAllCategoryProducts();
        loadAllBrands();
        loadAllBrandProducts();
        loadAllSuppliers();
        loadAllSupplierProducts()
    }, [])

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">You're interacting with {store.store_name} store</div></Col>
                {/* <Col xs="auto"><Button className="mt-2" variant="outline-dark">Sale</Button></Col> */}
            </Row>
            <Row>
                <Tabs className="mb-3">
                    <Tab eventKey="product" title="Product">
                        <ProductList products={products} storeId={storeId} categories={categories}/>
                    </Tab>
                    <Tab eventKey="categories" title="Categories">
                        <CategoryList products={products} categories={categories} categoryProducts={categoryProducts}/>
                    </Tab>
                    <Tab eventKey="brand" title="Brand">
                        <BrandList brands={brands} products={products} brandProducts={brandProducts} />
                    </Tab>
                    <Tab eventKey="supplier" title="Suppliers">
                        <SupplierList suppliers={suppliers} products={products} supplierProducts={supplierProducts} />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )
}

export default ProductPage;