import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import ExportProducts from './SummaryExports';

function OrdersExport({handleFind}) {
    const orders = useSelector((state)=> state.orderReducer.ordersMonth)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(orders)

  //method 2 for totalPrice
  const TotalOrders=()=>{
    let T = 0
    orders.map((ord)=>
    T=T+ord.TotalPrice
    )
    return T
  }

  return (
    <div className='modal_order_month'>
        <Button variant="primary" onClick={()=>{handleShow();handleFind()}}>
        Apply
      </Button>

      <Modal show={show} onHide={handleClose} 
       dialogClassName="modal-90w"
       aria-labelledby="example-custom-modal-styling-title">

        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title>
          <ExportProducts />
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Invoice Number</th>
          <th>Customer</th>
          <th>Total(TND)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {orders.map((ord)=>
      <tr
      key={ord._id}>
        <td>N°{ord.OrderNum}</td>
        <td>{ord.OrderClient.Name}</td>
        <td>{`${ord.OrderDate.Day}-${ord.OrderDate.Month}-${ord.OrderDate.Year}`}</td>
        <td>{ord.TotalPrice}</td>
        <td>{ord.TotalPrice}</td>
      </tr>
      
    
      )}
      <tr>
          <td colSpan={4} style={{fontWeight:'bold', textAlign:'center'}}>Total</td>
          <td>{TotalOrders()} TND</td>
        </tr>
      </tbody>
    </Table>
    </Modal.Body>
    </Modal>
    
    </div>
   
  );
}

export default OrdersExport;