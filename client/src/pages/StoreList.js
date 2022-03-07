import React from 'react';
import {Navbar, Container, Button, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function StoreList({user, setUser}) {

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
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Store #1</Accordion.Header>
                        <Accordion.Body>
                            Address: 123 Main Street, Suite 330, Boston, MA
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Store #2</Accordion.Header>
                        <Accordion.Body>
                            Address: 456 South Street, Brooklyn, NY 11235
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
        </Container>
        </>
    )
}

export default StoreList;