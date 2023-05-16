import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { postProduct } from '../JS/actions/products';
import { getProducts } from '../JS/actions/products';
import { useDispatch } from 'react-redux';

function AddModal() {
  const [show, setShow] = useState(false);
  const [Name, setName] = useState('');
  const [Stock, setStock] = useState('');
  const [Image, setImage] = useState('');
  const [Price, setPrice] = useState('');
  const [Categorie, setCategorie] = useState('');
  const [Barcode, setBarcode] = useState('')
  const dispatch = useDispatch()
  // const  error = useSelector((state)=>state.productReducer.errors)
  // console.log(error)
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Add= async()=>{
    try {
      dispatch(postProduct({Name,Stock,Image,Price,Categorie,Barcode}));
    } catch (error) {
    
      console.log(error) 
    }
    dispatch(getProducts())
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Stock</Form.Label>
        <Form.Control  placeholder="stock" onChange={(e)=>setStock(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control  placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categorie</Form.Label>
        <Form.Control type="text" placeholder="Categorie" onChange={(e)=>setCategorie(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Barcode</Form.Label>
        <Form.Control type="text" placeholder="Barcode" onChange={(e)=>setBarcode(e.target.value)} />
      </Form.Group>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();Add()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;