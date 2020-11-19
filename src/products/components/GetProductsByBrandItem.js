import React from 'react';
import { Link } from 'react-router-dom';

const GetProductsByBrandItem = (props) => {
    return (
      <div>
        <Link to={`/product/${props.id}`}>
          <div>
            {" "}
            {props.name}
            {props.price}
            {props.brand}
          </div>
        </Link>
      </div>
    );
}

export default GetProductsByBrandItem;
