import React from 'react';
import {Stack, Form, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductSearch({search, setSearch, storeId}){

    return (
        <>
        <Stack direction="horizontal" gap={2}>
            <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} className="me-auto" placeholder="Add your item here..." />
            <Button variant="dark">Search</Button>
            <div className="vr" />
            <Button as={Link} to="/products/new" state={storeId} variant="outline-dark">Add</Button>
        </Stack>
        {/* <Row className="mt-3">
            <Col>
                <Form onChange={handleChange}>
                    <Form.Label>Category</Form.Label>
                    <Form.Select>
                        <option>All Categories</option>
                        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </Form.Select>
                </Form>
            </Col>
            <Col>
                <Form.Label>Brands</Form.Label>
                <Form.Select>
                    <option>Brands</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Label>Suppliers</Form.Label>
                <Form.Select>
                    <option>Suppliers</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
        </Row> */}
        </>
    )
}
export default ProductSearch;