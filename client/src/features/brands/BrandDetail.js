import React, {useState} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Table, ListGroup, ButtonGroup} from 'react-bootstrap';
import UpdateBrandForm from './UpdateBrandForm';
import AllProducts from './AllProducts';
import { useDispatch } from 'react-redux';
import { brandRemoved } from "./brandsSlice";


function BrandDetail(){
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const brand = location.state.brand;
    const allProducts = location.state.allProducts;

    const[showUpdateBrandForm, setShowUpdateBrandForm] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [displayedBrand, setDisplayedBrand] = useState(brand)

    function handleDelete(){
        fetch(`/brands/${brand.id}`, {
            method: "DELETE"
        }).then(r => {
            if(r.ok){
                dispatch(brandRemoved(brand.id));
                navigate(-1);
            }
        })
    }


    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">You're interacting with {displayedBrand.name} Brand</div></Col>
            </Row>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{displayedBrand.name}</td>
                        <td>{displayedBrand.description}</td>
                    </tr>
                </tbody>
            </Table>
            <ListGroup>
                {displayedBrand.products.map(p => <ListGroup.Item action key={p.id} >{p.title}</ListGroup.Item>)}
            </ListGroup>

            <ButtonGroup className="mt-3">
                <Button 
                    onClick={() => {
                        setShowUpdateBrandForm(!showUpdateBrandForm)
                        setShowAllProducts(false)
                    }} 
                    className="btn-sm" variant="outline-dark">Update</Button>
                <Button 
                    onClick={() => {
                        setShowAllProducts(!showAllProducts)
                        setShowUpdateBrandForm(false)
                    }} 
                    className="btn-sm" variant="outline-dark">Add More Product</Button>
                <Button className="btn-sm" onClick={handleDelete} variant="outline-dark">Delete</Button>
            </ButtonGroup>

            {/* Update Brand Form */}
            {showUpdateBrandForm ? <UpdateBrandForm displayedBrand={displayedBrand} setDisplayedBrand={setDisplayedBrand} setShowUpdateBrandForm={setShowUpdateBrandForm} /> : null}
            {/* Show All Products to be added to the brand */}
            {showAllProducts ? <AllProducts displayedBrand={displayedBrand} allProducts={allProducts} /> : null}
        </Container>
        
    )
}

export default BrandDetail;