import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddModal from './AddProduct';
import {useDispatch} from 'react-redux'
import { searchP } from '../JS/actions/products';

function SearchProducts() {
  
  const dispatch = useDispatch()
  const handleChange= (e)=>{  
       dispatch(searchP(e.target.value))
  }
  

  return (
    <div>
    <div className='searchbar'>
      <div style={{paddingTop:'7px',paddingLeft:'7px'}}>
      <AddModal />
      </div>
      <div style={{display:'flex', height:'40px', marginTop:'8px'}}>
      <Form.Group className="mb-3">
        <Form.Select>
          <option>Products Category</option>
          <option>Memoire</option>
          <option>Carte Graphique</option>
        </Form.Select>
      </Form.Group>
      <Button variant="outline-success" >Filter</Button>
      </div>
      
      <div style={{display:'flex',height:'45px',paddingTop:'7px',paddingRight:'7px'}}>
      <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
      <Button variant="outline-success" >Search</Button>
      </div>
    </div>
    </div>
  );
}

export default SearchProducts;