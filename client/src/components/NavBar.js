import React from 'react';
import {Navbar, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavBar({user, handleLogOutClick}){
    return(
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
    )
}

export default NavBar;