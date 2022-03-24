import React from 'react';
import {Table, Figure} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductTable({products}) {
    return (
        <>
        <p className="mt-3">{products.length} products</p>
        <Table striped bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Inventory</th>
                    <th>Retail Price</th>
                    <th>Supplier</th>
                    <th>Brand</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key ={product.id}>
                        <td><Figure.Image width={50} alt={product.title} src={product.image}></Figure.Image></td>
                        <td><Link to={`/products/${product.id}`} state={product}>{product.title}</Link></td>
                        <td>{product.inventory}</td>
                        <td>${product.retail_price}</td>
                        <td>Supplier Name</td>
                        <td>Brand Name</td>
                        <td>
                            <ul>
                                {product.categories.map(category => <li>{category.name}</li>)} 
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default ProductTable;