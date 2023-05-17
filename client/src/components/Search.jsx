import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddModal from './AddProduct';
import {useDispatch} from 'react-redux'
import { searchP } from '../JS/actions/products';

function Filter() {
  
  const dispatch = useDispatch()
 
  
  const handleChange= (e)=>{  
       dispatch(searchP(e.target.value))
  }
  

  return (
    <Navbar bg="light" expand="lg" style={{width:"1200px",margin:"5px auto 10px"}}>
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <AddModal />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Filter;