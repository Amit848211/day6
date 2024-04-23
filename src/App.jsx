import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import img1 from './image/1.jpg'
import img2 from './image/2.jpeg'
import img3 from './image/3.jpg'
import img4 from './image/4.avif'
import img5 from './image/5.avif'

function App() {
  const [quantity, setQuantity] = useState(5)

  const[totalPrice,setTotalPrice]=useState(0)

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung S21",
      quantity: 1,
      price: 20000,
      image:img4
    },
    {
      id: 2,
      name: "Galaxy S23 FE",
      quantity: 1,
      price: 30000,
      image:img5
    },
    {
      id: 3,
      name: "Iphone 14",
      quantity: 1,
      price: 50000,
      image:img1
    },
    {
      id: 4,
      name: "Vivo",
      quantity: 1,
      price: 15000,
      image:img2
    },
    {
      id: 5,
      name: "Xiaomi",
      quantity: 1,
      price: 22000,
      image:img3
    }
  ]);


  function Totalprice (){
    let temp =0;
    const product=[...products]
    product.map((item)=>{
       temp +=(item.quantity*item.price);
    })
    setTotalPrice(temp)
   }
   useEffect(()=>{
    Totalprice();
   },[])
   console.log("taotalprice",totalPrice);

  return (
    <>
      <Navbar quantity={quantity} />
     <Cart products={products} setProducts={setProducts} quantity={quantity} 
     setQuantity={setQuantity} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>


    
    </>
  )
}

export default App
