import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { postProduct } from '../JS/actions/products';
import { useDispatch} from 'react-redux';

function AddModal() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({Name:'',Stock:'',Image:'',Price:'',Categorie:'',Barcode:''})
  const dispatch = useDispatch()
  // const  success = useSelector((state)=>state.productReducer.msgSuccess)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Add= ()=>{
    
      dispatch(postProduct(product));
      setProduct({Name:'',Stock:'',Image:'',Price:'',Categorie:'',Barcode:''})
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
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setProduct({...product,Name: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Stock</Form.Label>
        <Form.Control  placeholder="Stock" onChange={(e)=>setProduct({...product,Stock: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image" onChange={(e)=>setProduct({...product,Image: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control  placeholder="Price" onChange={(e)=>setProduct({...product,Price: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categorie</Form.Label>
        <Form.Control type="text" placeholder="Categorie" onChange={(e)=>setProduct({...product,Categorie: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Barcode</Form.Label>
        <Form.Control type="text" placeholder="Barcode" onChange={(e)=>setProduct({...product,Barcode: e.target.value})} />
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