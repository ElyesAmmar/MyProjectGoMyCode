import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../JS/actions/order';


function MakeOrder() {
const [show, setShow] = useState(false);
const dispatch = useDispatch()
const [product, setProduct] = useState({name:'',quantity:''})
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
console.log(product)



const handleSubmit = () =>{
    console.log(product)
    dispatch(addProduct(product)) 
}
return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Make Order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='client-order'>
                <Form.Label>Add client</Form.Label><br/>
                <Form.Control style={{width:'350px'}}  />
            </div>
        </Modal.Body>
        <Modal.Header >
        <Modal.Title>Add products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div className='products-order'>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save and Print Invioce
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MakeOrder;