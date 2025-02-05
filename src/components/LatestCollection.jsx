import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {
 const { products } = useContext(ShopContext);
 const [latestProducts, setlatestProducts] = useState([]);
 useEffect(() =>{
  setlatestProducts(products.slice(0,10));
 },[])
 return (
   <div className='my-10'>
     <div className='text-center py-8 text-3xl'>
       <Title text1={"LATEST"} text2={"COLLECTIONS"} />
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
       Recusandae nisi magnam dolore neque molestiae consectetur quam eveniet fuga ipsam optio saepe dignissimos temporibus, assumenda voluptatum, odit repudiandae voluptatem nam natus.</p>
     </div>

   </div>
 );
};

export default LatestCollection;

