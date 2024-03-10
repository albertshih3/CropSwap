import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
// import './CropRotation.css';

async function getUserFromJoinTable(userID) {
  let data = JSON.stringify({
    "dataSource": "Data0",
    "database": "userData",
    "collection": "join", // replace with your join table name
    "filter": { "email": userID }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3001/api/data',
    headers: { 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*', 
      'api-key': 'jMoBVq9SZJleC59mT6ifNYa6cyHw3UHWXiLEWwRfizWVvaWbV7TTFwRUL6wqPOT3', 
      'Accept': 'application/json'
    },
    data : data
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    return response.data.documents[0]; // Modify this line
  } catch (error) {
    console.error(error);
  }
}


const CropRotation = () => {

  // Get current user information
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [selectedCrop, setSelectedCrop] = useState('');
  const [rotationHistory, setRotationHistory] = useState([]);

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const handleRotationSubmit = (event) => {
    event.preventDefault();
    setRotationHistory([...rotationHistory, selectedCrop]);
    setSelectedCrop('');
  };

  // Define userId as a state
const [userId, setUserId] = useState(null);

// Fetch userId when component mounts
useEffect(() => {
  if (isAuthenticated) {
    let data = JSON.stringify({
      "dataSource": "Data0",
      "database": "userData",
      "collection": "users",
      "filter": {"email" : user.email}
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/api/data',
      headers: { 
        'Content-Type': 'application/json',
        'api-key': 'jMoBVq9SZJleC59mT6ifNYa6cyHw3UHWXiLEWwRfizWVvaWbV7TTFwRUL6wqPOT3', 
        'Accept': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setUserId(response.data.documents[0].email); // Set userId here
      console.log("userId: " + userId);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}, [isAuthenticated, user.email]); // Depend on isAuthenticated and user.email

// Fetch joinData when userId changes
useEffect(() => {
  if (userId) {
    getUserFromJoinTable(userId);
  }
}, [userId]); // Depend on userId


  
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Crop Rotation Planner</h1>
          <Form onSubmit={handleRotationSubmit}>
            <Form.Group controlId="cropSelect">
              <Form.Label>Select Crop:</Form.Label>
              <Form.Control
                as="select"
                value={selectedCrop}
                onChange={handleCropChange}
              >
                <option value="">Select...</option>
                <option value="Wheat">Wheat</option>
                <option value="Corn">Corn</option>
                <option value="Soybeans">Soybeans</option>
                {/* Add more crop options as needed */}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add to Rotation
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Rotation History</h2>
          <ul>
            {rotationHistory.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CropRotation;