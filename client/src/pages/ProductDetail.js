import React, {useState} from 'react';
import {Container, Row, Col, Figure, Table, Button, ButtonGroup} from 'react-bootstrap';
import { useLocation, useNavigate} from 'react-router-dom'
import ProductUpdateForm from '../components/ProductUpdateForm';

function ProductDetail () {
    const location = useLocation()
    const navigate = useNavigate();
    const product = location.state
    const [displayedProduct, setDisplayedProduct] = useState(product)
    const [showProductUpdateFrom, setShowProductUpdateFrom] = useState(false)

    function handleDelete(){
        fetch(`/products/${product.id}`, {
            method: 'DELETE'
        }).then(r => {
            if(r.ok){
                navigate(-1)
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">{displayedProduct.title}</div></Col>
            </Row>
            <Row>
                <Col sm={4} md="auto">
                    <Figure>
                    <Figure.Image
                        width={300}
                        height={180}
                        alt={displayedProduct.title}
                        src={displayedProduct.image}
                    />
                    </Figure>                
                </Col>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Information</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>{displayedProduct.title}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{displayedProduct.description}</td>
                            </tr>
                            <tr>
                                <td>Inventory</td>
                                <td>{displayedProduct.inventory}</td>
                            </tr>
                            <tr>
                                <td>Retail Price</td>
                                <td>${displayedProduct.retail_price}</td>
                            </tr>
                            <tr>
                                <td>SKU</td>
                                <td>{displayedProduct.SKU}</td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>Category Name</td>
                            </tr>
                            <tr>
                                <td>Supplier</td>
                                <td>Supplier Name</td>
                            </tr>
                            <tr>
                                <td>Brand</td>
                                <td>Brand Name</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
            <ButtonGroup>
                <Button onClick={() => setShowProductUpdateFrom(!showProductUpdateFrom)}className="m-3" variant="outline-dark">{showProductUpdateFrom ? "Cancel": "Edit"}</Button>
                <Button onClick={() => handleDelete()} className="m-3" variant="outline-dark">Delete</Button>
            </ButtonGroup>
            </Row>
            <Row className="mb-3">
                {showProductUpdateFrom ? <ProductUpdateForm setShowProductUpdateFrom={setShowProductUpdateFrom} product={displayedProduct} setDisplayedProduct={setDisplayedProduct}/> : null}
            </Row>
            
        </Container>
        
    )
}

export default ProductDetail;