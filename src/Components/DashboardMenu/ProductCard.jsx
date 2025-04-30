import axios from 'axios';
import React from 'react'

const ProductCard = ({ title, price, OnSale }) => {
  const discountPrice = (price * 0.6); // 40% OFF



  return (
    <div className="w-64 p-4 bg-white rounded-xl shadow-md border">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

      <div>
        {OnSale ? (
          <div className="flex items-center gap-2">
            <h6 className="text-sm text-gray-400 line-through">${price}</h6>
            <h4 className="text-lg font-bold text-red-600">${discountPrice}</h4>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">40% OFF</span>
          </div>
        ) : (
          <h6 className="text-lg font-semibold text-gray-800">${price}</h6>
        )}
      </div>
    </div>
  )
}

export default ProductCard
