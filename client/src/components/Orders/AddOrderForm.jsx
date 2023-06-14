import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { Form, Button, Row, Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { findProductByBarcode } from '../../JS/actions/products';


function AddOrderForm() {
  const dispatch = useDispatch()
  const [ProductName, setProductName] = useState('')
  const [Barcode, setBarcode] = useState('')
  const [clientName, setClientName] = useState({name:'', company:''})
  const [Quantity, setQuantity] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getproduct =()=>{
      dispatch(findProductByBarcode(Barcode))
  }

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
  style={{width:'450px'}} 
  onChange={(e)=>setClientName(e.target.value)} 
  />
</div>
  <div style={{width:'450px', marginTop:'10px'}}>
  <Form>
    <Row>
    <Col>
      <Form.Label>Product Name</Form.Label><br/>
      <Form.Control style={{width:'350px'}}  onChange={(e)=>setProductName({...product,name:e.target.value})} />   
    </Col>
    <Col>
      <Form.Label>Quantity</Form.Label><br/>
      <Form.Control type='number' style={{width:'70px'}} onChange={(e)=>setQuantity(Number(e.target.value))} />
    </Col>
    <Col>
      <Form.Label>Product Barcode</Form.Label><br/>
      <Form.Control style={{width:'350px'}}  onChange={(e)=>setBarcode(e.target.value)} />   
    </Col>
    <Col>
      <Form.Label>Quantity</Form.Label><br/>
      <Form.Control type='number' style={{width:'70px'}} onChange={(e)=>setQuantity(Number(e.target.value))} />
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
          <Button variant="primary" onClick={()=>{getproduct();handleClose()}}>
            Save Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  );
}

export default AddOrderForm;
