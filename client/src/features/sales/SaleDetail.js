import React, {useState} from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import {useNavigate, useLocation} from 'react-router-dom';
import SaleProductSearch from './SaleProductSearch';
import SaleProductList from './SaleProductList';
import SaleProcess from "./SaleProcess";

function SaleDetail(){
    const location  = useLocation();
    const sale = location.state.sale;
    const store = location.state.store;
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const displayedProducts = [...store.products].filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    const [saleDetails, setSaleDetails] = useState(sale.sale_details)

    function handleAddProduct(product){
        const newSaleDetail = {
            sale_id: sale.id,
            product_id: product.id,
            quantity: 0
        }
        fetch('/sale_details', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newSaleDetail)
        })
            .then(r=>r.json())
            .then(newSaleDetail => setSaleDetails([...saleDetails, newSaleDetail]))
    }

    return (
        <Container>
            <Row>
                <Col xs="auto"><Button className="mt-2" onClick={() => navigate(-1)} variant="outline-dark">Back</Button></Col>
                <Col><div className="alert alert-primary">Process: sale #{sale.id}</div></Col>
            </Row>

            <Row>
                <Col xs={12} md={8}>
                    <SaleProductSearch saleProducts={store.products} search={search} setSearch={setSearch} />
                    <SaleProductList handleAddProduct={handleAddProduct} saleProducts={displayedProducts} />
                </Col>
                <Col xs={6} md={4}>
                    <SaleProcess setSaleDetails={setSaleDetails} saleDetails={saleDetails} currentSale={sale}/>
                </Col>
            </Row>

        </Container>
    )
}

export default SaleDetail;