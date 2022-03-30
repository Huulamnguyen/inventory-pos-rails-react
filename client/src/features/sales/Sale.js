import React, {useState, useEffect} from 'react';
import {Container, Button, Row, Col, ListGroup, Accordion, ButtonGroup} from 'react-bootstrap';
import {useNavigate, useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import {fetchProducts} from "../products/productsSlice";

function Sale(){
    const location = useLocation();
    const store = location.state.store
    const navigate = useNavigate();

    const [sales, setSales] = useState([]);
    
    function loadAllSales(){
        fetch("/sales")
        .then( r => r.json() )
        .then(data => setSales(data.filter(sale => sale.store.id === store.id)))
    }
    useEffect(() => {
        loadAllSales()
    },[store.id])

    function handleCreateNewSale(){
        const newSale = {
            tax: 0.089,
            store_id: store.id
        }
        fetch("/sales",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newSale)
        }).then(r => r.json()).then(newSale => setSales([...sales, newSale]))
    }

    function handleDeleteSale(e){
        const saleId = parseInt(e.target.value)
        fetch(`/sales/${saleId}`, {
            method: "DELETE"
        }).then(setSales([...sales].filter(sale => sale.id !== saleId)))
    }

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">Sale</div></Col>
            </Row>

            <Row>
                <Accordion className="mt-3" defaultActiveKey="0">
                    {sales.map(sale => 
                        <Accordion.Item key={sale.id} eventKey={sale.id}>
                            <Accordion.Header>Sale #{sale.id}</Accordion.Header>
                            <Accordion.Body>
                                <p className="mt-3">Detail:</p>
                                <ListGroup>
                                    <ListGroup.Item>Total Quantity: {sale.total_quantity}</ListGroup.Item>
                                    <ListGroup.Item>Total Price: {sale.total_price}</ListGroup.Item>
                                    <ListGroup.Item>Tax Amount: {sale.tax_amount}</ListGroup.Item>
                                    <ListGroup.Item>Tax Amount: {sale.total_amount}</ListGroup.Item>
                                </ListGroup>
                                <p className="mt-3">Products:</p>
                                <ListGroup>
                                    {sale.sale_details.map(sale_detail => 
                                            <ListGroup.Item key={sale_detail.id}>{sale_detail.product.title}, qty: {sale_detail.quantity}</ListGroup.Item>
                                        )}
                                </ListGroup>
                                <div className="mt-3">
                                    <Link 
                                        to={`/sale/${sale.id}`}
                                        state={{sale: sale, store: store}}
                                        >
                                        <Button variant="outline-dark">
                                                Process
                                        </Button>
                                    </Link>
                                    <Button value={sale.id} onClick={handleDeleteSale} className="mx-2" variant="outline-dark">Delete</Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                    <Button className="mt-3" variant="outline-dark" onClick={handleCreateNewSale}>New Sale</Button>
                </Accordion>
            </Row>
        </Container>
    )
}

export default Sale;