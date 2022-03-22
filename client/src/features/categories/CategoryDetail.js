import React from 'react';

function CategoryDetail({category}){
    return (
        <div className="mt-3">
            <p>Category Name: {category.name}</p>
            <p>Description: {category.description}</p>
        </div>
        
    )
}

export default CategoryDetail;