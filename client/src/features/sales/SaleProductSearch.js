import React from 'react';
import {Stack, Form} from 'react-bootstrap';

function SaleProductSearch({saleProducts, search, setSearch}){
    return(
        <>
        <Stack direction="horizontal" gap={2}>
            <Form.Control 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="me-auto" 
                placeholder="Search for Product ..." />
        </Stack>
        </>
    )
}

export default SaleProductSearch;