import React from 'react'
import ProductCard from '@/components/Product/ProductCard';
import { getProducts } from '../../../../sanity/utils';

async function Products({
  params
}: {
  params: {
    category: "male" | "female" | "all"
  }
}) {

  const products = await getProducts(params.category);
  
  return (
    <div className='Allproducts-container'>
        {products.map((product: any, index: any) => (
          <ProductCard product={product} key={index} />
        ))}
    </div>
  )
}

export default Products