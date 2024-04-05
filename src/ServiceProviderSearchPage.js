import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ServiceProviderSearchPage = () => {
   
    const loc=useLocation();
    const serviceNeeded=loc.state;
  const [location, setLocation] = useState('');
  const [serviceProviders, setServiceProviders] = useState([]);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated service provider data
    const dummyServiceProviders = [
      { id: 1, name: 'Provider A', location: 'Prayagraj' },
      { id: 2, name: 'Provider B', location: 'Pratapgarh' },
      { id: 3, name: 'Yash', location: 'Lucknow' },
      // Add more dummy data or fetch from backend based on location and serviceNeeded
    ];
    // Filtering service providers based on location and serviceNeeded
    const filteredServiceProviders = dummyServiceProviders.filter(provider =>
      provider.location.toLowerCase() === location.toLowerCase()
    );
    setServiceProviders(filteredServiceProviders);
  };

  return (
    <Container style={{marginBottom:'20vh'}}>
      <h1 style={{textAlign:'center',color:'lightcoral'}}>Find Service Providers for {serviceNeeded} </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your location" 
            value={location}
            onChange={handleChange}
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{width:'100%',marginTop:'10vh'}}>
          Search
        </Button>
      </Form>

      {serviceProviders.length > 0 &&
        <div className="mt-4">
          <h2>Service Providers</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {serviceProviders.map(provider => (
                <tr key={provider.id}>
                  <td>{provider.id}</td>
                  <td>{provider.name}</td>
                  <td>{provider.location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      }
    </Container>
  );
};

export default ServiceProviderSearchPage;
