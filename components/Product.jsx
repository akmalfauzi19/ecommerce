import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
    function ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function IdrFormat(string) {
        var number_string = string.toString(),
            over = number_string.length % 3,
            idr = number_string.substr(0, over),
            thousand = number_string.substr(over).match(/\d{3}/g);

        if (thousand) {
            var separator = over ? '.' : '';
            idr += separator + thousand.join('.');
        }

        return 'Rp. ' + idr;
    }

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