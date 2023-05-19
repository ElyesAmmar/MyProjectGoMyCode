import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../JS/actions/order';


function MakeOrder() {

const dispatch = useDispatch()
const [product, setProduct] = useState({name:'',quantity:''})
console.log(product)

const Products = useSelector((state)=> state.productReducer.products)
console.log(Products)

const handleSubmit = () =>{
    console.log(product)
    dispatch(addProduct(product)) 
}
return (
  <div className='order-form'>
    <div style={{margin: '10px auto 0'}}>
      <Form.Label>Add client</Form.Label><br/>
      <Form.Control style={{width:'450px'}} />
    </div>
       
        
    <div style={{margin: '10px auto 0'}}>
      <Form>
        <Row>
        <Col>
          <Form.Label>Name or Barcode Product</Form.Label><br/>
          <Form.Control style={{width:'350px'}} onSubmit={handleSubmit} onChange={(e)=>setProduct({...product,name:e.target.value})} />   
        </Col>
        <Col>
          <Form.Label>Quantity</Form.Label><br/>
          <Form.Control type='number' onSubmit={handleSubmit} style={{width:'70px'}} onChange={(e)=>setProduct({...product,quantity:e.target.value})} />
        </Col>
        </Row>
        </Form>
    </div>
    <div>
    <Button variant="primary" >
            Save and Print Invioce
      </Button>
    </div>
      
      
    
    </div>
  );
}

export default MakeOrder;


 {/* { Products
                .filter((prod)=> prod.Name.toLowerCase().includes(product.name.toLowerCase())) 
                .map((prod) => ( 
                     
                ))
                } */}