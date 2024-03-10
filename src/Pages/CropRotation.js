import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './CropRotation.css';

const CropRotation = () => {
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