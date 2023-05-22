import React, { useState } from 'react';
import { Form, Button, Row, Col, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../JS/actions/products'
import {SaveOrder } from '../JS/actions/order'
import AddOrderForm from './AddOrderForm';


function MakeOrder() {

  const [products, setProducts ]= useState(useSelector((state)=> state.orderReducer.products)) 
  const [client, setClient] = useState(useSelector((state)=> state.orderReducer.client))
  const productsOrder = products.map((prod)=> {return {Name: prod.Name , Quantity: prod.quantity , Price: prod.Price , TotalPrice: prod.TotalPrice  }})
  const dispatch = useDispatch()
  
  const TotalPrice = () => {
    return products.reduce((total, product) => {
      return total + (product.Price * product.quantity);
    }, 0);
  };

 // add data to order
  const saveOrder = () =>{
    dispatch(SaveOrder({OrderClient: client, Products: productsOrder, TotalPrice: TotalPrice() }))
  }

// update Stock 
const updateStockProduct = () =>{
      
      products.map((prod)=>dispatch(updateProduct(prod.mongoId, {Stock: prod.Stock-prod.quantity})))
  
}
// remove order details


return (
  <div>
    <AddOrderForm />
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
    onClick={()=>{updateStockProduct();saveOrder() }}>
            Save and Print Invioce
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
      {products.map((prod)=>
        <tr key={prod.Id}>
          <td>P-{prod.Id}</td>
          <td>{prod.Name}</td>
          {/* <td style={{width:'60px'}}><Form.Control type='number' onChange={(e)=>totalPriceProduct( e.target.value)} ></Form.Control></td> */}
          <td>{prod.quantity}</td>
          <td>{prod.Price}</td>
          <td>{prod.Price * prod.quantity }</td>
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


