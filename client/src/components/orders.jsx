import React from "react";
import OrdersBar from "./SearchBarOrder";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Orders(){




    return(
        <div className="datatable">
       <OrdersBar />
       <Table  striped>
      <thead>
        <tr>
          <th>#</th>
          <th style={{width:'150px'}}>Invoice Number</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Date</th>
          <th style={{width:'200px'}}>Print Invoice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Form.Check /></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td><Button variant="secondary">Print Invoices</Button></td>
        </tr>
      </tbody>
    </Table>
        </div>
    )



}

export default Orders;