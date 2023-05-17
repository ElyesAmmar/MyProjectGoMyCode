import React from "react";
import Table from 'react-bootstrap/Table';
import ClientsBar from "./SearchBarClient";



function Clients(){
    return(
 <div>
    <ClientsBar />
    <Table striped bordered hover>
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
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
       </tbody>
    </Table>

</div>
    )


}

export default Clients