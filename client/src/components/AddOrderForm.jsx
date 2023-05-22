import React, {useState} from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';



function AddOrderForm() {
  const [product, setProduct] = useState({name:'',quantity:''})
  const [client, setClient] = useState({name:'', company:''})
  return (
    <div className='order-form'>

    <div style={{margin: '10px auto 0'}}>
      <Form.Label>Add Customer</Form.Label><br/>
      <Form.Control 
      placeholder='Enter the client name or the company name' style={{width:'450px'}} 
      onChange={(e)=>setClient(e.target.value)} 
      />
      <Button
       variant="secondary" style={{float: 'right'}}
      >Add Customer</Button>
    
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
     </div>
    
  );
}

export default AddOrderForm;