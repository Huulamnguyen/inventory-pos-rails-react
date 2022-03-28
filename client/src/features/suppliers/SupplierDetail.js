import React, {useState} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Table, ListGroup, ButtonGroup} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { supplierRemoved } from "./suppliersSlice";
import UpdateSupplierForm from './UpdateSupplierForm';
import AllProducts from './AllProducts';

function SupplierDetail(){
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const supplier = location.state.supplier;
    const allProducts = location.state.allProducts;

    const[showUpdateSupplierForm, setShowUpdateSupplierForm] = useState(false)
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [displayedSupplier, setDisplayedSupplier] = useState(supplier)

    function handleDelete(){
        fetch(`/suppliers/${supplier.id}`, {
            method: "DELETE"
        }).then(r => {
            if(r.ok){
                dispatch(supplierRemoved(supplier.id));
                navigate(-1);
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">You're interacting with {displayedSupplier.name} Brand</div></Col>
            </Row>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{displayedSupplier.name}</td>
                        <td>{displayedSupplier.address}</td>
                        <td>{displayedSupplier.phone}</td>
                        <td>{displayedSupplier.email}</td>
                    </tr>
                </tbody>
            </Table>
            <ListGroup>
                {displayedSupplier.products.map(p => <ListGroup.Item action key={p.id} >{p.title}</ListGroup.Item>)}
            </ListGroup>

            <ButtonGroup className="mt-3">
                <Button 
                    onClick={() => {
                        setShowUpdateSupplierForm(!showUpdateSupplierForm)
                        setShowAllProducts(false)
                    }} 
                    className="btn-sm" variant="outline-dark">Update</Button>
                <Button 
                    onClick={() => {
                        setShowAllProducts(!showAllProducts)
                        setShowUpdateSupplierForm(false)
                    }} 
                    className="btn-sm" variant="outline-dark">Add More Product</Button>
                <Button className="btn-sm" onClick={handleDelete} variant="outline-dark">Delete</Button>
            </ButtonGroup>

            {/* Update Supplier Form */}
            {showUpdateSupplierForm ? <UpdateSupplierForm displayedSupplier={displayedSupplier} setDisplayedSupplier={setDisplayedSupplier} setShowUpdateSupplierForm={setShowUpdateSupplierForm}/> : null }

            {/* Show All Products to be added to the supplier */}
            {showAllProducts ? <AllProducts displayedSupplier={displayedSupplier} allProducts={allProducts} /> : null}
        </Container>
    )
}

export default SupplierDetail;