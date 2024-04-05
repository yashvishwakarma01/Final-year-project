import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ServiceProviderRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    city: '',
    state: '',
    contactNumber: '',
    profession:'',
    adharNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here
    // and submit the form data to your backend
    console.log(formData);
  };

  return (
    <Container>
      <h1 style={{textAlign:'center',fontSize:'5vh'}}>Service Provider Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter age" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter city" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label>State</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter state" 
            name="state"
            value={formData.state}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control 
            type="tel" 
            placeholder="Enter contact number" 
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formContactNumber">
          <Form.Label>Profession</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Profession" 
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAdharNumber">
          <Form.Label>Adhar Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Adhar number" 
            name="adharNumber"
            value={formData.adharNumber}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Button  variant="primary" type="submit" style={{width:'100%',margin:'5vh 0'}}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ServiceProviderRegistration;
