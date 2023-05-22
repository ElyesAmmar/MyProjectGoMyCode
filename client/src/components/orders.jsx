import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersBar from "./SearchBarOrder";
import { getOrders }  from "../JS/actions/order";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Orders(){

const dispatch = useDispatch()
const orders = useSelector((state)=> state.orderReducer.orders)
console.log(orders)
useEffect(()=>{
   dispatch(getOrders())
},[])

    return(
        <div className="datatable">
       <OrdersBar />
       <Table  striped>
      <thead>
        <tr>
          <th>#</th>
          <th style={{width:'150px'}}>Invoice Number</th>
          <th>Customer</th>
          <th>Company</th>
          <th>Total (TND)</th>
          <th>Date</th>
          <th style={{width:'200px'}}>Print Invoice</th>
        </tr>
      </thead>
      {orders.map((ord)=>
        <tbody key={ord._id}>
        <tr >
          <td><Form.Check /></td>
          <td>N°{ord.OrderNum}</td>
          <td>{ord.OrderClient.Name}</td>
          <td>{ord.OrderClient.Company}</td>
          <td>{ord.TotalPrice}</td>
          <td>{ord.OrderDate}</td>
          <td><Button variant="secondary">Print Invoice</Button></td>
        </tr>
      </tbody>
      )}
      
    </Table>
        </div>
    )



}

export default Orders;