import React, { useState } from 'react';
import { Form, Button, Row, Col, } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function MakeOrder() {

const [product, setProduct] = useState({name:'',quantity:''})
console.log(product)

const products = useSelector((state)=> state.orderReducer.products)
console.log(products)


return (
  <div>
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
          <Form.Control style={{width:'350px'}}  onChange={(e)=>setProduct({...product,name:e.target.value})} />   
        </Col>
        <Col>
          <Form.Label>Quantity</Form.Label><br/>
          <Form.Control type='number' style={{width:'70px'}} onChange={(e)=>setProduct({...product,quantity:e.target.value})} />
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

    <div className='order'>
      

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