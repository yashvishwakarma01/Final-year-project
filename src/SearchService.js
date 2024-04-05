import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SearchService = () => {
  const [formData, setFormData] = useState({
    location: '',
    serviceNeeded: ''
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
    // You can perform search logic here
    console.log(formData);
  };

  return (
    <Container>
      <h2 style={{textAlign:'center'}}>Find Service Providers Nearby</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your location" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formServiceNeeded">
          <Form.Label>Service Needed</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter the service needed" 
            name="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'100%',margin:'10vh 0'}}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default SearchService;
