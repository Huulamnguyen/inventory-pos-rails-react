import React, {useState} from 'react';
import UpdateUserForm from '../components/UpdateUserForm';
import {Link} from 'react-router-dom';
import {Container, Navbar, Table, Button} from 'react-bootstrap';

function User({user, setUser}){

    const [showUpdateUserForm, setShowUpdateUserForm] = useState(false)

    return (
        <Container>
            <Navbar>
                <Navbar.Brand>Welcome, {user.username}!</Navbar.Brand>
            </Navbar>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Information</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{user.address}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                </tbody>
            </Table>
            <Button as={Link} to="/" variant="outline-dark">Back</Button>
            <Button onClick={() => setShowUpdateUserForm(!showUpdateUserForm)} className="m-3" variant="dark">{showUpdateUserForm?"Cancel":"Edit"}</Button>
            {showUpdateUserForm ? <UpdateUserForm user={user} setUser={setUser} setShowUpdateUserForm={setShowUpdateUserForm} /> : null}
        </Container>
    )
}
export default User;