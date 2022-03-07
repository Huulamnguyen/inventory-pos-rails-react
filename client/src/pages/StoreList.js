import React, {useState, useEffect} from 'react';
import NewStoreForm from '../components/NewStoreForm';
import {Navbar, Container,ButtonGroup, Button, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function StoreList({user, setUser}) {

    const [showNewStoreForm, setShowNewStoreForm] = useState(false)

    function handleLogOutClick(){
        fetch("/logout",{
            method: "DELETE"
        }).then((r) => {
            if(r.ok){
                setUser(null);
            }
        });
    }

    return (
        <>
        <Navbar>
            <Container>
                <Navbar.Brand>Inventory & POS</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as <Link to="/users">{user.username}</Link>
                    </Navbar.Text>
                    <Button className="m-3" variant="outline-dark" onClick={handleLogOutClick}>
                        Logout
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <p>Welcome, {user.username}! You have {user.stores.length} stores to run</p>
            {user.stores.length ? 
            (   
                <>
                <Accordion>
                    {user.stores.map((store) => (
                        <Accordion.Item key={store.id} eventKey={store.id}>
                            <Accordion.Header>Store Name: {store.store_name}</Accordion.Header>
                            <Accordion.Body>
                                <p>Address: {store.address}</p>
                                <ButtonGroup>
                                    <Button variant="outline-dark">Edit</Button>
                                    <Button variant="outline-dark">Delete</Button>
                                    <Button variant="outline-dark">Manage</Button>
                                </ButtonGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
                <Button onClick={() => setShowNewStoreForm(!showNewStoreForm)} className="mt-3 mb-3" variant="outline-dark">{showNewStoreForm?"Cancel":"Add New Store"}</Button>
                {showNewStoreForm?<NewStoreForm user={user} setShowNewStoreForm={setShowNewStoreForm} />:null}
                </>
            ):( 
                <>
                <Button onClick={() => setShowNewStoreForm(!showNewStoreForm)} className="mt-3 mb-3" variant="outline-dark">Create New Store</Button>
                {showNewStoreForm?<NewStoreForm user={user} setShowNewStoreForm={setShowNewStoreForm} />:null}
                </>
            )}
        </Container>
        </>
    )
}

export default StoreList;