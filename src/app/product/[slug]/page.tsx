import React from 'react'
import { getProduct } from '../../../../sanity/utils';
import ProductImage from '@/components/ProductImage';
import ProductDetails from '@/components/ProductDetails';

export default async function ProductPage({
  params: {
    slug
  }
}: {
  params: {
    slug: string;
  }
}) {

  const { image, name, price, tags, care, details, _id } = await getProduct(slug);

  const careList = [];

  {
    for (let i = 0; i < care.length; i++) {
      careList.push(care[i].children[0].text)
    }
  }

  return <div className="products">

    <div className="product-detail-container">

      <ProductImage image={image} name={name} />

      <ProductDetails _id={_id} name={name} tags={tags} price={price} />

    </div>

    <div className="product-desc-container">
      <div className='desc-title'>
        <div className="desc-background">
          Overview
        </div>
        <h2>Product Information</h2>
      </div>
      <div className='desc-details'>
        <h4>PRODUCT DETAILS</h4>
        <p>{details[0].children[0].text}</p>
      </div>
      <div className='desc-care'>
        <h4>PRODUCT CARE</h4>
        <ul>
          {careList.map(list => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>

  </div>
}
