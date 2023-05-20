import React, { useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import ClientsBar from "./SearchBarClient";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../JS/actions/clients";
import EditClient from "./EditClient";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { addClientOrder } from "../JS/actions/order";


function Clients(){
    const dispatch = useDispatch()
    // const [clients, setClients] = useState([])
    const input = useSelector((state)=> state.clientReducer.searchClient)
    const clients = useSelector((state)=> state.clientReducer.clients)
    const navigate = useNavigate();
    const [clientOrder, setClientOrder] = useState({})

    useEffect(()=>{
        dispatch(getClients())
    },[])
    
    return(
<div className="datatable">
    <ClientsBar />
    <button onClick={()=>{
      dispatch(addClientOrder(clientOrder))
      navigate("/dashboard/currentOrder")
      }}>add to order</button>
    <Table striped bordered hover className='tableClient'></Table>
    <Table striped bordered hover className='tableClient'>
    <thead>
        <tr>
        <th>Ref</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Company</th>
        <th>Phone</th>
        <th style={{width:"100px"}}></th>
        </tr>
    </thead>

    {clients
    .filter((cl)=> cl.Name.toLowerCase().includes(input.toLowerCase()))
    .map((cl)=>   
    <tbody key={cl.Reference}>
        <tr >
        <td >Ref-{cl.Reference}</td>
        <td>{cl.Name}</td>
        <td>{cl.Email}</td>
        <td>{cl.Address}</td>
        <td>{cl.Company}</td>
        <td>{cl.Phone}</td>
        <td><EditClient id={cl._id}/> </td>
        <td>
            <Button style={{width:'50px'}} variant="secondary"
        onClick={()=> setClientOrder({ Name: cl.Name , Company:cl.Company, Address:cl.Address, Phone:cl.Phone})}
        >+</Button>
        </td>
        </tr>
    </tbody>
    )}
    </Table>

</div>
    )


}

export default Clients