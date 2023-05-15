
import Card from 'react-bootstrap/Card';
import EditModal from './EditProduct';

function Cards({Name,Image,Stock,Price,Id}) {
  
  return (
    <Card style={{ height:'400px', width: '14rem' , marginBottom:"10px" }}>
      <Card.Img variant="top" src={Image} style={{height:"200px"}} />
      <Card.Body style={{height:"200px" }}>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
          stock : {Stock} <br/>
          Price : {Price} TND
        </Card.Text>

        <EditModal id={Id} />
        
      </Card.Body>
    </Card>
  );
}

export default Cards;