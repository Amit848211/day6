import React, { useEffect, useRef, useState } from 'react'

function Cart({products,setProducts,quantity,setQuantity,totalPrice,setTotalPrice}) {

    
    console.log(products);

   const[finalPrice,setFinalPrice]=useState(totalPrice)
    function increament (index){
        let temp = [...products];
        temp.filter((item)=>{
            if(item.id === index && item.quantity >=0){
                item.quantity +=1;
               setTotalPrice((prev)=>prev+item.price)
               setQuantity((prev)=>prev+1)
            }
            return item;
            
        })
        setProducts(temp)
    }

    function decreament (index){
        let temp = [...products];
        const data=temp.filter((item)=>{
            if(item.id === index && item.quantity >=0){
                item.quantity -=1;
                setTotalPrice((prev)=>prev-item.price)
                setQuantity((prev)=>prev-1)
               
            }
            return (item.quantity >0
                
            );
            
        })
        setProducts(data)


       
    }
    console.log("quantity",quantity);
  return (
    <>
        <div className='flex flex-col items-center pt-28 pb-5'>
            <h1 className='text-5xl'>YOUR BAG</h1>
            <div className='w-full h-auto px-56 mt-5'>
                {products.length <=0 && <p className='text-center text-2xl text-blue-600'>is currently empty</p>}
                 {products.map((item,index)=>{
                    if(item.quantity > 0){
                    return (<>
                        <div className='w-full h-[120px] flex items-center justify-between'>
                            <div className=' flex gap-10'>
                                <img src={item.image} className='w-[100px] h-[100px] object-cover'></img>
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>
                                       Rs. {item.price}
                                    </p>
                                    <button   className='text-green-500'>Remove</button>
                                </div>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-2xl'  
                                    onClick={()=>increament(item.id)}>+</p>
                                    <p className='text-2xl'>{item.quantity}</p>
                                    <p className='text-2xl' 
                                    onClick={()=>decreament(item.id)}>-</p>
                                </div>
                            
                        </div>
                    </>)}
                 })
                 
                 }

            </div>
            <div className='w-full h-auto px-56'>
                  <hr className='w-full h-[2px] bg-blue-600'></hr>
                 <div className='flex items-center justify-between px-5 text-2xl'>
                    <h1>Total Price</h1>
                    <h1>Rs.{totalPrice}</h1>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Cart