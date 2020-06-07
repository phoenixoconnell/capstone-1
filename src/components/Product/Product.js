//Will be passed as a prop from Products component

//Displays all product data

//Drop down for quantity selection

//Purchase quantity selected button

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'

function Product(props) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(props.getProd(props.match.params.id))
    }, [])

    return (
        <div>
            {product.name}
        </div>
    )
}

export default withRouter(Product);