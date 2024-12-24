import React, { useContext } from 'react';
import { productInfo } from '../ContextApi/ParentComp';

export default function ChildComp1() {
    const products = useContext(productInfo);

    return (
        <div>
            <h2>hello</h2>
            <p>Product Name: {products.p_name}</p>
        </div>
    );
}
