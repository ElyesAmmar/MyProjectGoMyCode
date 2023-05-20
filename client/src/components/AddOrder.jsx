import React, { useState } from 'react';
import { Form, Button, Row, Col, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CloseButton from 'react-bootstrap/CloseButton';

function MakeOrder() {

const [product, setProduct] = useState({name:'',quantity:''})
console.log(product)

const [products, setProducts ]= useState(useSelector((state)=> state.orderReducer.products)) 
console.log(products)


return (
  <div>
  <div className='order-form'>
    <div style={{margin: '10px auto 0'}}>
      <Form.Label>Add client</Form.Label><br/>
      <Form.Control style={{width:'450px'}} />
    </div>
    <div style={{margin: '10px auto 0'}}>
      <Form>
        <Row>
        <Col>
          <Form.Label>Name or Barcode Product</Form.Label><br/>
          <Form.Control style={{width:'350px'}}  onChange={(e)=>setProduct({...product,name:e.target.value})} />   
        </Col>
        <Col>
          <Form.Label>Quantity</Form.Label><br/>
          <Form.Control type='number' style={{width:'70px'}} onChange={(e)=>setProduct({...product,quantity:e.target.value})} />
        </Col>
        </Row>
        </Form>
    </div>
   
    </div>
    <div>
    <Button variant="primary" >
            Save and Print Invioce
      </Button>
    </div>
    
    <div className='ordertable' >
    
      <div>

      </div>
      <div>
        
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>U.P</th>
          <th>Total</th>
          
        </tr>
      </thead>
      
      <tbody>
      {products.map((prod, index)=>
        <tr>
          <td>P-{prod.Id}</td>
          <td>{prod.Name}</td>
          <td style={{width:'60px'}}><Form.Control type='number' ></Form.Control></td>
          <td>{prod.Price}</td>
          <td>{index}</td>
          <CloseButton onClick={()=> setProducts(products.splice(2,1))} />
          </tr>
           
        
        )  }
        <tr>
          <td colSpan={4} style={{fontWeight:'bold'}}>Total</td>
          <td>......</td>
          
        </tr>
      </tbody>
      
      
    </Table>

      </div>

    </div>
    </div>
  );
}

export default MakeOrder;


 {/* { Products
                .filter((prod)=> prod.Name.toLowerCase().includes(product.name.toLowerCase())) 
                .map((prod) => ( 
                     
                ))
                } */}