import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./clickEazzy.png";


function Bar() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "rgb(37, 150, 190)" }}>
        <Container fluid>
          <Navbar.Brand href="/home">
            <img src={logo} style={{ width: "3.5vw" }} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home" style={{ fontSize: 20 }}>
                Home
              </Nav.Link>
              <Nav.Link href="/find" style={{ fontSize: 20 }}>
                Find services
              </Nav.Link>
    
              <Nav.Link href="/setprofile" style={{ fontSize: 20 }}>
                {" "}
                Profile
              </Nav.Link>
              <Nav.Link href="/login" style={{ fontSize: 20 }}>
                SignIn
              </Nav.Link>
              <Nav.Link href="/signup" style={{ fontSize: 20 }}>
                SignUp
              </Nav.Link>
              <Nav.Link
                href="/serviceproviderregistration"
                style={{
                  fontSize: 18,
                  backgroundColor: "blue",
                  borderRadius: "5px",
                  
                }}
              >
                Register as Service Provider
              </Nav.Link>
              <Nav.Link href="/about" style={{ fontSize: 20 }}>
                About Us{" "}
              </Nav.Link>

              <Nav.Link href="/contact" style={{ fontSize: 20 }}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Bar;
