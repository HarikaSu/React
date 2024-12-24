import React, { useContext } from 'react';
import { productInfo } from '../ContextApi/ParentComp';

export default function ChildComp2() {
    const products = useContext(productInfo);

    return (
        <div>
            <h2>welcome</h2>
            <p>Product Price: {products.p_price}</p>
        </div>
    );
}
