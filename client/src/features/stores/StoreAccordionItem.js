import React, {useState} from 'react';
import {ButtonGroup, Button, Accordion} from 'react-bootstrap';
import UpdateStoreForm from './UpdateStoreForm';
import {Link} from 'react-router-dom';

function StoreAccordionItem({store, handleDelete}){

    const [showUpdateStoreForm, setShowUpdateStoreForm] = useState(false);
    const [displayedStore, setDisplayedStore] = useState(store)

    return (
        <Accordion.Item key={displayedStore.id} eventKey={displayedStore.id}>
            <Accordion.Header>Branch: {displayedStore.store_name}</Accordion.Header>
            <Accordion.Body>
                <p>Address: {displayedStore.address}</p>
                <ButtonGroup className="mb-3">
                    <Button onClick={() => setShowUpdateStoreForm(!showUpdateStoreForm)} variant="outline-dark">{showUpdateStoreForm?"Cancel":"Edit"}</Button>
                    <Button onClick={() => handleDelete(displayedStore.id)} variant="outline-dark">Delete</Button>
                    <Button as={Link} to={`/store/${displayedStore.id}`} variant="outline-dark">Manage</Button>
                </ButtonGroup>
                {showUpdateStoreForm ? <UpdateStoreForm store={displayedStore} setDisplayedStore={setDisplayedStore} setShowUpdateStoreForm={setShowUpdateStoreForm} /> : null}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default StoreAccordionItem;