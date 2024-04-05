import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigationbar() {
  
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary justify-content-between" >
        <Container >
          <Navbar.Brand href="/home">ClickEasy</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us </Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/profile">Go to Profile</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Form style={{position:'absolute', right:"10px"}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}



export default Navigationbar
