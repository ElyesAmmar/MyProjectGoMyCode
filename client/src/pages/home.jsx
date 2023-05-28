import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserRegiser from "../components/formUser";
import { useDispatch } from "react-redux";
import {userLogin} from '../JS/actions/user';


function Home() {

  const dispatch = useDispatch();
  const [user, setUser] = useState({Email:"", Password:""});
  
  const handleLogin = ()=>{
    console.log(user)
    dispatch(userLogin(user));
  }
  return (
    <div  className="home" >
      <div className="logform">
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setUser({...user, Email: e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setUser({...user, Password: e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div style={{width:'250px', display:'flex', justifyContent:'space-between'}}>
      <Button style={{width:'100px'}} variant="primary" type="submit" onClick={handleLogin}>
        Log In
      </Button>
      <UserRegiser />
     
      </div>
     
    </Form>
    </div>
    </div>
  );
}

export default Home;
