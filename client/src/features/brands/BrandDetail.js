import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import {Container, Row, Col, Button, Table, ListGroup, ButtonGroup} from 'react-bootstrap';


function BrandDetail(){
    const navigate = useNavigate();
    const location = useLocation();
    const brand = location.state

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">You're interacting with {brand.name} Brand</div></Col>
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
                        <td>{brand.name}</td>
                        <td>{brand.description}</td>
                    </tr>
                </tbody>
            </Table>
            <ListGroup>
                {brand.products.map(p => <ListGroup.Item key={p.id} >{p.title}</ListGroup.Item>)}
            </ListGroup>

            <ButtonGroup className="mt-3">
                <Button className="btn-sm" variant="outline-dark">Update</Button>
            </ButtonGroup>

        </Container>
        
    )
}

export default BrandDetail;