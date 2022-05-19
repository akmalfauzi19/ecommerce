import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

import { useStateContext } from '../context/StateContext';


const Product = ({ product: { image, name, slug, price } }) => {
    function ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const { IdrFormat } = useStateContext();
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className='product-card'>
                    <img src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image" />
                    <p className='product-name'>{ucFirst(name)}</p>
                    <p className='product-name'>{IdrFormat(price)}</p>
                </div>

            </Link>
        </div>
    )
}



export default Product