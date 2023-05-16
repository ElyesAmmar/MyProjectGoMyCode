
import Table from 'react-bootstrap/Table';
import EditModal from './EditProduct';

function ProductTable({Name,Image,Stock,Price,Id,Barcode,ProductId,Categorie}) {
  
  return (
    <Table className='tableProduct' striped bordered hover size="sm">
      <thead>
        <tr>
        <th style={{width:'40px'}}>#</th>
          <th style={{width:'80px'}}>#</th>
          <th style={{width:'100px'}}>Image</th>
          <th style={{width:'250px'}}>Name</th>
          <th style={{width:'80px'}}>Stock</th>
          <th style={{width:'90px'}}>Price</th>
          <th>Categorie</th>
          <th style={{width:'120px'}}>Barcode</th>
          <th style={{width:'120px'}}>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td></td>
          <td>{ProductId}</td>
          <td><img alt="productImage" src={Image} style={{height:'100px',width:'100px'}} /></td>
          <td>{Name}</td>
          <td>{Stock}</td>
          <td>{Price} TND</td>
          <td>{Categorie}</td>
          <td>{Barcode}</td>
          <td><EditModal id={Id} /></td>
        </tr>
        
      </tbody>
    </Table>

        
        
     
  );
}

export default ProductTable;



