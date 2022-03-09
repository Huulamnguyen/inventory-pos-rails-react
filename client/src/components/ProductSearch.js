import React from 'react';
import {Stack, Form, Button} from 'react-bootstrap';

function ProductSearch({search, setSearch}){

    return (
        <Stack direction="horizontal" gap={2}>
            <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} className="me-auto" placeholder="Add your item here..." />
            <Button variant="dark">Search</Button>
            <div className="vr" />
            <Button variant="outline-dark">Add</Button>
        </Stack>
    )
}

export default ProductSearch;