import React from 'react';
import {Accordion} from 'react-bootstrap';
import StoreAccordionItem from './StoreAccordionItem';

function StoreAccordion({stores, handleDelete}){

    return (
        <Accordion>
            { stores.map(store => <StoreAccordionItem key={store.id} store={store} handleDelete={handleDelete} />) }
        </Accordion>
    )
}

export default StoreAccordion;