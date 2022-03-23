import React, {useState, useEffect} from 'react';
import NewStoreForm from './NewStoreForm';
import {Container, Button, Alert} from 'react-bootstrap';
import StoreAccordion from './StoreAccordion';
import { useSelector, useDispatch } from "react-redux";
import {fetchStores, storeRemoved} from './storesSlice';

function StoreList({user}) {

    const [showNewStoreForm, setShowNewStoreForm] = useState(false)
    const stores = useSelector(state => state.stores.entities.filter(store => store.user.id === user.id))

    const dispatch = useDispatch();
    function loadAllStores(){
        dispatch(fetchStores());
    };

    useEffect(() => {
        loadAllStores();
    }, [])

    function handleDelete(id){
        fetch(`/stores/${id}`, {
            method: "DELETE"
        }).then((r) => {
            if(r.ok){ 
                dispatch(storeRemoved(id))
            }
        });
    };

    return (
        <Container>
            <Alert>Welcome, {user.username}! You have {stores.length} stores to run</Alert>
            {stores.length > 0 ? 
            (   
                <>
                <StoreAccordion stores={stores} handleDelete={handleDelete} />
                <Button onClick={() => setShowNewStoreForm(!showNewStoreForm)} className="mt-3 mb-3" variant="outline-dark">{showNewStoreForm?"Cancel":"Add New Store"}</Button>
                {showNewStoreForm?<NewStoreForm user={user} setShowNewStoreForm={setShowNewStoreForm} stores={stores} />:null}
                </>
            ):( 
                <>
                <Button onClick={() => setShowNewStoreForm(!showNewStoreForm)} className="mt-3 mb-3" variant="outline-dark">Create New Store</Button>
                {showNewStoreForm?<NewStoreForm user={user} setShowNewStoreForm={setShowNewStoreForm} stores={stores} />:null}
                </>
            )}
        </Container>
    )
}

export default StoreList;