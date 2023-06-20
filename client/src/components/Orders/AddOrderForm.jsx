import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import { Form, Button, Row, Col, Table} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { findProductByBarcode } from '../../JS/actions/products';
import { addProductsOrder } from "../../JS/actions/order";
import { useSelector } from 'react-redux';

function AddOrderForm() {
  const dispatch = useDispatch()
  const pro = useSelector((state)=> state.productReducer.product)
  const [ProductName, setProductName] = useState('')
  const [Barcode, setBarcode] = useState('')
  const [clientName, setClientName] = useState('')
  const [Quantity, setQuantity] = useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([])

  const getproduct =(event)=>{
    event.preventDefault();
      dispatch(findProductByBarcode(Barcode))
  }
// useEffect(()=>{
//   setProducts([...products,{...pro,Quantity:Quantity}])
// },[products,Quantity])
console.log(products)
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
  <Form onSubmit={getproduct}>
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
      <input type='submit' value='submit'></input>
    </Col>
    <Col>
      <Form.Label type='submit'>Quantity</Form.Label><br/>
      <Form.Control type='number'  style={{width:'70px'}} onChange={(e)=>setQuantity(Number(e.target.value))} />
    </Col>
    </Row>
    </Form>
    { products.map((p)=>
    <Table striped bordered hover>
      <thead key={p._id}>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{p.Name}</td>
          <td>{p.Quantity}</td>
        </tr>
      </tbody>
    </Table>
    ) }
   
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
