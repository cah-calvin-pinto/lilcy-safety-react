import React, { useState } from 'react';
import './Products.css';
import { ProductTypes } from './ProductTypes';
import ProductItems from './ProductItems';

export default function Products() {

    const [productType, setProductType] = useState('Corporate Uniforms');
    const [innerProduct, setInnerProduct] = useState('');

    function handleClick(newProductType) {
        setProductType(newProductType);
        setInnerProduct('');
    }

    function setProductView(newInnerProduct){
        setInnerProduct(newInnerProduct);
    }

    return (
        <>
            <div className="products-header">
                Products
        </div>
            <div className="container products-background">
                <div className="row products-container">
                    <div className="col-md-3 col-12 product-types pa0px">
                        <ul className="pa0px">
                            {ProductTypes.map((item, index) => {
                                return (
                                    <>
                                        <li key={index} className={productType === item.title ? 'product-links active' : 'product-links'} onClick={() => handleClick(item.title)} >{item.title}</li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={innerProduct ? 'col-md-9 col-12':'col-md-9 col-12 product-items'} ><ProductItems productType={productType} setProductView={setProductView} innerProduct={innerProduct}/></div>
                </div>
            </div>
        </>
    )
}
