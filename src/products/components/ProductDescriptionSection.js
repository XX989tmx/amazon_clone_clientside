import React from 'react';
import BottomSectionOfProductDescription from './BottomSectionOfProductDescription';
import MiddleSectionOfProductDescription from './MiddleSectionOfProductDescription';
import UpperSectionOfProductDescription from './UpperSectionOfProductDescription';

const ProductDescriptionSection = (props) => {
    return (
        <div>
            <UpperSectionOfProductDescription />
            <MiddleSectionOfProductDescription />
            <BottomSectionOfProductDescription />
        </div>
    );
}

export default ProductDescriptionSection;
