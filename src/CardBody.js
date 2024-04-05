import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from 'react-router-dom' ;
// import image from './edu.jpg'

function CardBody(props) {
    const navigate = useNavigate();   
 
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.image} alt='education' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate('/search',{state:props.title})}>Go to {props.title.toUpperCase()}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBody;
