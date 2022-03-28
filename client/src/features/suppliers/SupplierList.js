import React, {useState} from 'react';
import {Accordion, Button} from 'react-bootstrap';
import SupplierAccordionItem from './SupplierAccordionItem';
import NewSupplierForm from './NewSupplierForm';

function SupplierList({suppliers, products, supplierProducts}){
    const [showNewSupplierForm, setShowNewSupplierForm] = useState(false)
    return (
        <>
        <Accordion>
            {suppliers.map(supplier => <SupplierAccordionItem 
                                        key={supplier.id}
                                        supplier={supplier}
                                        products={products} 
                                        supplierProducts={supplierProducts} />)}
        </Accordion>
        <Button onClick={() => setShowNewSupplierForm(!showNewSupplierForm)} variant="outline-dark" className="mt-3 btn-sm">{showNewSupplierForm ? "Cancel" : "Add New Supplier"}</Button>
        {showNewSupplierForm ? <NewSupplierForm setShowNewSupplierForm={setShowNewSupplierForm}/> : null}
        </>
    )
}
export default SupplierList;