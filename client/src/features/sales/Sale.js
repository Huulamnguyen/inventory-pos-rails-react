import React from 'react';
import {Tabs, Tab, Container, Button, Row, Col} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';

function Sale(){

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">Sale</div></Col>
            </Row>

            <Row>
                <Col xs={12} md={8}>
                    <Row>
                        
                    </Row>
                </Col>
                <Col xs={6} md={4}>
                    Sell Checking out
                </Col>
            </Row>

        </Container>
    )
}

export default Sale;