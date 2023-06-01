import React, {useState} from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';


function AddOrderForm() {
  const [product, setProduct] = useState({name:'',quantity:''})
  const [client, setClient] = useState({name:'', company:''})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" style={{width:'300px'}} onClick={handleShow}>
        Add An Order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='order-form'>

<div >
  <Form.Label>Add Customer</Form.Label><br/>
  <Form.Control 
  placeholder='Enter the client name or the company name' style={{width:'450px'}} 
  onChange={(e)=>setClient(e.target.value)} 
  />
</div>
  <div style={{width:'450px', marginTop:'10px'}}>
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
 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  );
}

export default AddOrderForm;
