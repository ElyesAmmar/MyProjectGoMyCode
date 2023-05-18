import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import ClientsBar from "./SearchBarClient";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../JS/actions/clients";
import EditClient from "./EditClient";



function Clients(){
    const dispatch = useDispatch()
    // const [clients, setClients] = useState([])
    const input = useSelector((state)=> state.clientReducer.searchClient)

    useEffect(()=>{
        dispatch(getClients())
    },[])
    const clients = useSelector((state)=> state.clientReducer.clients)

   


    return(
<div>
    <ClientsBar />
    <Table striped bordered hover className='tableProduct'>
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
        <tr>
        <td>Ref-{cl.Reference}</td>
        <td>{cl.Name}</td>
        <td>{cl.Email}</td>
        <td>{cl.Address}</td>
        <td>{cl.Company}</td>
        <td>{cl.Phone}</td>
        <td><EditClient id={cl._id}/> </td>
        </tr>
    </tbody>
    )}
    </Table>

</div>
    )


}

export default Clients