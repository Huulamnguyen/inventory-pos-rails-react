import React from 'react';

function CustomerSaleList({sales}){

    console.log(sales)
    return (
        <>
        <p className="fw-bold">Sale History</p>
        <ul>
            {sales.map(sale => <li>Sale #{sale.id} - Total: {sale.total_amount} - Quantity: {sale.total_quantity}</li>)}
        </ul>
        </>
    )
}

export default CustomerSaleList;