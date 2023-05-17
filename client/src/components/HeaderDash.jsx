import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';



function Dash() {
  
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1> 
      <div className='contenu-dashboard'>
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <Nav.Link eventKey="link-3"><Link to='products'>Products</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-1"><Link to='clients'> Clients</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Orders</Nav.Link>
      </Nav.Item>
      
    </Nav>
    <Outlet />
      </div>
    </div>
  );
}

export default Dash;