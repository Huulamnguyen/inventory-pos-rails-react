import React from 'react';
import {Stack, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductSearch({search, setSearch, storeId}){

    return (
        <Stack direction="horizontal" gap={2}>
            <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} className="me-auto" placeholder="Add your item here..." />
            <Button variant="dark">Search</Button>
            <div className="vr" />
            <Button as={Link} to="/products/new" state={storeId} variant="outline-dark">Add</Button>
        </Stack>
    )
}

export default ProductSearch;