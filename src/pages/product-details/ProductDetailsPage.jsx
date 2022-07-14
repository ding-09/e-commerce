import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDetailsPage = () => {
  const {productId} = useParams();
  return (
    <div>
      This is product details page {productId}
    </div>
  )
}

export default ProductDetailsPage
