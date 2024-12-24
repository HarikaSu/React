import React, { createContext, useState } from 'react';
import ChildComp1 from "../ContextApi/ChildComp1";
import ChildComp2 from "../ContextApi/ChildComp2";

export const productInfo = createContext();

export default function ParentComp() {
    const [products, setProducts] = useState({
        p_id: "1",
        p_name: "mobile",
        p_price: "23454",
        p_model: "2004",
    });

    return (
        <div>
            <productInfo.Provider value={products}>
                
                <ChildComp1 />
                <ChildComp2 />
            </productInfo.Provider>
        </div>
    );
}
