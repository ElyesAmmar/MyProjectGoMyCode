import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { deleteProduct, getProducts, updateProduct } from '../JS/actions/products';
import { useDispatch } from 'react-redux';
 


function EditModal(id) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct] = useState({})
  const [update, setUpdate] = useState({})
  const dispatch = useDispatch()

const Open= async()=>{
    try {
      let result = await axios.get(`/api/products/product/${id.id}`)
      setProduct(result.data.response)
    } catch (error) {
      console.log(error)
    }
}
const handlechange =(e)=>{
      // e.preventDefault()
      setUpdate( {...update,[e.target.name]: e.target.value})
      
} 
const Edit=()=>{
    dispatch(updateProduct(id.id,update));
    dispatch(getProducts());
    setUpdate('')
  }
  const Delete = async()=>{
    dispatch(deleteProduct(id.id))
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={()=>{handleShow();Open()}}>
        show more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img alt="productImage" src={product.Image} style={{height:'200px',width:'200px',marginLeft:'120px'}} />
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name : {product.Name}</Form.Label>
        <Form.Control type="text" name="Name" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Stock : {product.Stock}</Form.Label>
        <Form.Control type='number' name="Stock" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price : {product.Price} </Form.Label>
        <Form.Control type='number' name="Price" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category : {product.Category}</Form.Label>
        <Form.Control type="text" name="Category" onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image </Form.Label>
        <Form.Control type="text" name="Image" onChange={handlechange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Barcode : {product.Barcode} </Form.Label>
        <Form.Control type="text" name="Barcode" onChange={handlechange}  />
      </Form.Group>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" style={{width:"90px"}} onClick={()=>{Delete();handleClose()}}>Delete</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{Edit();handleClose()}}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;