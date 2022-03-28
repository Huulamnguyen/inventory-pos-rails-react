import React from 'react';
import {Accordion, Button} from 'react-bootstrap';
import SupplierAccordionItem from './SupplierAccordionItem';

function SupplierList({suppliers, products}){
    return (
        <>
        <Accordion>
            {suppliers.map(supplier => <SupplierAccordionItem 
                                        key={supplier.id}
                                        supplier={supplier}
                                        products={products} />)}
        </Accordion>
        </>
    )
}
export default SupplierList;