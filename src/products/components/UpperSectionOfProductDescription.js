import React from 'react';
import ProductBrand from './ProductBrand';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';

const UpperSectionOfProductDescription = (props) => {
    return (
        <div>
            <ProductTitle />
            <ProductBrand />
            <ProductPrice />
        </div>
    );
}

export default UpperSectionOfProductDescription;
