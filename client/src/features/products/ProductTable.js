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
                        <td><Link to={`/product/${product.id}`} state={product}>{product.title}</Link></td>
                        <td>{product.inventory}</td>
                        <td>${product.retail_price}</td>
                        <td>
                            <ul>
                                {product.suppliers.map(supplier => <li key={supplier.id}>{supplier.name}</li>)}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {product.brands.map(brand => <li key={brand.id}>{brand.name}</li>)}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {product.categories.map(category => <li key={category.id}>{category.name}</li>)} 
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