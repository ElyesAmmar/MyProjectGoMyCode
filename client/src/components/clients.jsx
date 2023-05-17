import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import ClientsBar from "./SearchBarClient";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../JS/actions/clients";



function Clients(){
    const dispatch = useDispatch()
    // const [clients, setClients] = useState([])

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
        </tr>
    </thead>
    {clients
    .map((cl)=>   
    <tbody key={cl.Reference}>
        <tr>
        <td>Ref-{cl.Reference}</td>
        <td>{cl.Name}</td>
        <td>{cl.Email}</td>
        <td>{cl.Address}</td>
        <td>{cl.Company}</td>
        <td>{cl.Phone}</td>
        </tr>
    </tbody>
    )}
    </Table>

</div>
    )


}

export default Clients