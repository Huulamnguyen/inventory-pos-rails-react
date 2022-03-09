import React from 'react';
import {Container, Row, Col, Figure, Table, Button, ButtonGroup} from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

function ProductDetail () {
    const location = useLocation()
    const product = location.state

    console.log(product)
    return (
        <Container>
            <Row>
                <Col sm={4} md="auto">
                    <Figure>
                    <Figure.Image
                        width={300}
                        height={180}
                        alt={product.title}
                        src={product.image}
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
                                <td>{product.title}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{product.description}</td>
                            </tr>
                            <tr>
                                <td>Inventory</td>
                                <td>{product.inventory}</td>
                            </tr>
                            <tr>
                                <td>Retail Price</td>
                                <td>${product.retail_price}</td>
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
                <Button className="m-3" variant="outline-dark">Edit</Button>
                <Button className="m-3" variant="outline-dark">Delete</Button>
            </ButtonGroup>
            </Row>
            
        </Container>
        
    )
}

export default ProductDetail;