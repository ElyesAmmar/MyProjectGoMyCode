import React, { useState,useEffect } from 'react';
import { Button, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../JS/actions/products'
import {SaveOrder, sendMailOrder } from '../../JS/actions/order'
import AddOrderForm from './AddOrderForm';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function MakeOrder() {
  const product = useSelector((state)=> state.productReducer.product)
  console.log(product)
  const [products, setProducts] = useState(useSelector((state)=> state.orderReducer.products))
  console.log('products :' , products)
  const [AllProducts, setAllProducts] = useState([])
  const client = useSelector((state)=> state.orderReducer.client)
  const user = useSelector((state)=> state.userReducer.user)
  const order = useSelector((state)=> state.orderReducer.order)


  const productsOrder = products.map((prod)=> {return {Name: prod.Name , Quantity: prod.Quantity ,TotalCost:prod.TotalCost, 
                                                        Cost: prod.Cost, Price: prod.Price , TotalPrice: prod.TotalPrice  }})
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  //method 1 for totalPrice
  const TotalPrice = () => {
    return products.reduce((total, product) => {
      return total + (product.Price * product.Quantity);
    }, 0);
  };
  //method 2 for totalPrice
 const TotalCost=()=>{
  let T = 0
  products.map((prod)=>
  T=T+prod.TotalCost
  )
  return T
}

// add data to order
  const saveOrder = async() =>{
    await dispatch(SaveOrder({OrderClient: client, Products: productsOrder, TotalCost:TotalCost(), TotalPrice: TotalPrice() }));
    dispatch(sendMailOrder({user,order}))
  }

// update Stock 
const updateStockProduct = () =>{
      
      products.map((prod)=>dispatch(updateProduct(prod.mongoId, {Stock: prod.Stock-prod.Quantity})))
  
}
useEffect(()=>{
  let array = []
  let existing = false
  products.map((prod)=>{
    array.forEach((el)=>{
      if (prod.Name === el.Name){
        existing = true
        el.Quantity += prod.Quantity
        el.TotalPrice += prod.TotalPrice
        el.TotalCost += prod.TotalCost
      }
    })
    if(!existing){
      array.push(prod)
    }
  })
  setAllProducts(array)
},[])

console.log(AllProducts)

// useEffect(()=>{
//   const reducedTab = productsAdd.reduce((accumulator,current)=>{
//     const existingItem = accumulator.find((item)=> item.Name === current.Name);
//     if(existingItem){
//       existingItem.Quantity+= current.Quantity
//       existingItem.TotalPrice += current.TotalPrice
//     }else{
//       accumulator.push(current);
//     }
//     return accumulator;
//   },[])
//   setProducts(reducedTab)
// },[productsAdd])


return (
  <div style={{marginTop:'30px'}}>
    <div style={{textAlign:'center'}}>
    <AddOrderForm />
    </div>
    <div className='client' style={{paddingLeft:'300px'}}>
          <h2>Customer</h2><br/>
          <p> Name : {client.Name} <br/>
             Company : {client.Company} <br/> 
             Address : {client.Address} <br/>
             Phone : {client.Phone} </p>
    </div>
    <div>
    <Button 
    variant="primary" 
    style={{width:'200px', marginLeft:'800px'} }
    onClick={()=>{updateStockProduct();saveOrder();navigate("/dashboard/Orders")}}>
            Save Order
      </Button>
    </div>
    
    <div className='ordertable' >
      
      <div> 
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>U.P</th>
          <th>Total</th>
        </tr>
      </thead>
  
      <tbody>
      {AllProducts.map((prod)=>
        <tr key={prod.Id} >
          <td>P-{prod.Id}</td>
          <td>{prod.Name}</td>
          {/* <td style={{width:'60px'}}><Form.Control type='number' onChange={(e)=>totalPriceProduct( e.target.value)} ></Form.Control></td> */}
          <td>
            {/* <Form.Control style={{width:'60px'}} 
          type='number' 
          onChange={(e)=> {setProducts([...products,{...prod, Quantity: e.target.value}])} }>

          </Form.Control> */}
          
            {prod.Quantity}</td>
          <td>{prod.Price}</td>
          <td>{prod.Price * prod.Quantity }</td>
          {/* <CloseButton onClick={()=> setProducts(products.splice(2,1))} /> */}
          </tr>
        )}
        <tr>
          <td colSpan={4} style={{fontWeight:'bold'}}>Total</td>
          <td>{TotalPrice()} TND</td>
        </tr>
      </tbody>
    </Table>
      </div>

    </div>
    </div>
  );
}

export default MakeOrder;


