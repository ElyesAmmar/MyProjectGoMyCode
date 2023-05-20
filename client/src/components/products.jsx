import React, { useState } from "react";
import { getProducts } from "../JS/actions/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Filter from "./SearchBarProduct";
import Table from 'react-bootstrap/Table';
import EditModal from './EditProduct';
import Button from 'react-bootstrap/Button';
import { addProduct } from "../JS/actions/order";


function Products() {
const dispatch=useDispatch()
const products= useSelector((state)=>state.productReducer.products)
const inputS = useSelector((state)=>state.productReducer.productSearch)


useEffect(()=> {
    dispatch(getProducts())
},[])


    return(
        
<div className="datatable">
    <Filter />
    <Table className='tableProduct' striped bordered hover size="sm">
      <thead>
        <tr>
        
          <th style={{width:'80px'}}>#</th>
          <th style={{width:'100px'}}>Image</th>
          <th style={{width:'250px'}}>Name</th>
          <th style={{width:'80px'}}>Stock</th>
          <th style={{width:'150px'}}>Price</th>
          <th>Category</th>
          <th style={{width:'120px'}}>Barcode</th>
          <th style={{width:'120px'}}>Edit</th>
          <th style={{width:'70px'}}>add to order</th>
        </tr>
      </thead>

        {products
        .filter((prod)=> prod.Name.toLowerCase().includes(inputS.toLowerCase()))
        .map((prod)=> 
      
      <tbody key={prod.ProductId}>
        <tr>
          <td>P-{prod.ProductId}</td>
          <td><img alt="productImage" src={prod.Image} style={{height:'100px',width:'100px'}} /></td>
          <td>{prod.Name}</td>
          <td>{prod.Stock}</td>
          <td>{prod.Price} TND</td>
          <td>{prod.Category}</td>
          <td>{prod.Barcode}</td>
          <td><EditModal id={prod._id} /></td>
          <td><Button variant="secondary" onClick={()=>dispatch(addProduct({Id:prod.ProductId,Name:prod.Name}))}>+</Button></td>
        </tr>
        
      </tbody>)}
    </Table>
        
</div>
    )

}

export default Products;