import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

function SummaryExports() {
  const [show, setShow] = useState(false);
  const orders = useSelector((state)=> state.orderReducer.ordersMonth)
  const [products, setProducts] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showProducts, setShowProducts] = useState(false);
  
 //method 2 for totalPrice
 const TotalOrders=()=>{
  let T = 0
  orders.map((ord)=>
  T=T+ord.TotalPrice
  )
  return T
}

//method 2 for totalCost
const TotalCost=()=>{
  let T = 0
  orders.map((ord)=>
  T=T+ord.TotalCost
  )
  return T
}

const getProducts = ()=>{
    orders.map((ord)=> ord.Products.map((prod)=>
    setProducts((prevProd)=>[...prevProd, prod ])
    )
    )
}

console.log('products ::: ',products)
  return (
    <>
      <Button variant="light" style={{marginLeft:'20px'}} onClick={handleShow}>
        Summary Export 
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          <Button variant="secondary" style={{marginLeft:'20px'}} onClick={()=>{setShowProducts(true);getProducts()}}>
        Export Products
      </Button>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
        <th style={{width:'150px'}}>Invoice Number</th>
          <th>Customer</th>
          <th>Company</th>
          <th>Total Cost (TND)</th>
          <th>Total Price (TND)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((ord)=>
      <tr key={ord._id} >
          <td>N°{ord.OrderNum}</td>
          <td>{ord.OrderClient.Name}</td>
          <td>{ord.OrderClient.Company}</td>
          <td>{ord.TotalCost}</td>
          <td>{ord.TotalPrice}</td>
          <td>{`${ord.OrderDate.Day}-${ord.OrderDate.Month}-${ord.OrderDate.Year}`}</td>
        </tr>
        )}
        <tr>
          <th colSpan={3} style={{textAlign:'center'}}>Total:</th>
          <td style={{textAlign:'center'}}>{TotalCost()}  TND</td>
          <td style={{textAlign:'center'}}>{TotalOrders()}  TND</td>
        </tr>
        <tr>
          <th colSpan={3} style={{textAlign:'center'}}>Income:</th>
          <td colSpan={2} style={{textAlign:'center'}}>{TotalOrders()-TotalCost()}  TND</td>
        </tr>
      </tbody>
    </Table>
    {showProducts && 
      <Table striped bordered hover>
      <thead>
        <tr>
        <th>Product Name</th>
        <th>Cost</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
       <tr>
         <td>3</td>
         <td colSpan={2}></td>
         <td></td>
       </tr>
     </tbody>
   </Table>
    }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SummaryExports;