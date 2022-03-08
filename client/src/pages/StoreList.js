import React, {useState} from 'react';
import NewStoreForm from '../components/NewStoreForm';
import {Container, Button, Alert} from 'react-bootstrap';
import StoreAccordion from '../components/StoreAccordion';

function StoreList({user}) {

    const [showNewStoreForm, setShowNewStoreForm] = useState(false)
    const [stores, setStores] = useState(user.stores)

    function handleDelete(id){
        fetch(`/stores/${id}`, {
            method: "DELETE"
        }).then((r) => {
            if(r.ok){ 
                setStores(stores => stores.filter(store => store.id !== id)) 
            }
        });
    };

    return (
        <Container>
            <Alert>Welcome, {user.username}! You have {stores.length} stores to run</Alert>
            {stores.length > 0 ? 
            (   
                <>
                <StoreAccordion stores={stores} setStores={setStores} handleDelete={handleDelete} />
                <Button onClick={() => setShowNewStoreForm(!showNewStoreForm)} className="mt-3 mb-3" variant="outline-dark">{showNewStoreForm?"Cancel":"Add New Store"}</Button>
                {showNewStoreForm?<NewStoreForm user={user} setShowNewStoreForm={setShowNewStoreForm} setStores={setStores} stores={stores} />:null}
                </>
            ):( 
                <>
                <Button onClick={() => setShowNewStoreForm(!showNewStoreForm)} className="mt-3 mb-3" variant="outline-dark">Create New Store</Button>
                {showNewStoreForm?<NewStoreForm user={user} setShowNewStoreForm={setShowNewStoreForm} setStores={setStores} stores={stores} />:null}
                </>
            )}
        </Container>
    )
}

export default StoreList;