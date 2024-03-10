// CropRotation.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import './Styles/CropRotation.css'; // Import the CSS file

const SERVER_URL = process.env.REACT_APP_VERCEL_URL || 'http://localhost:3001';

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
    url: `${SERVER_URL}/api/data`,
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
    console.log(response.data.documents[0])
    return response.data.documents[0]; // Modify this line
  } catch (error) {
    console.error(error);
  }
}

const CropRotation = () => {
  const { user, isAuthenticated } = useAuth0();

  const [selectedCrop, setSelectedCrop] = useState('');
  const [rotationHistory, setRotationHistory] = useState([]);
  const [userData, setUserData] = useState(null);

  const handleCropChange = (event) => {
    setSelectedCrop(event.target.value);
  };

  const handleRotationSubmit = (event) => {
    event.preventDefault();
    setRotationHistory([...rotationHistory, selectedCrop]);
    setSelectedCrop('');
  };

  const [userId, setUserId] = useState(null);

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
        url: `${SERVER_URL}/api/data`,
        headers: { 
          'Content-Type': 'application/json',
          'api-key': 'jMoBVq9SZJleC59mT6ifNYa6cyHw3UHWXiLEWwRfizWVvaWbV7TTFwRUL6wqPOT3', 
          'Accept': 'application/json'
        },
        data : data
      };

      axios.request(config)
        .then((response) => {
          setUserId(response.data.documents[0].email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isAuthenticated, user.email]);

  useEffect(() => {
    if (userId) {
      getUserFromJoinTable(userId)
        .then(data => {
          setUserData(data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [userId]);


  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Crop Rotation Planner</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ul>
            {rotationHistory.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </Col>
      </Row>
      {userData && (
        <Row className="mt-4">
          <Col className="text-center">
            <p>
              County: {userData.county}, Soil: {userData.soil}, Weather: {userData.weather}
            </p>
            <p>Crops:</p>
            <ul className="crop-list">
              {[1, 2, 4].map((season) => (
                <div key={season} className="crop-category">
                  <h2>Season {season}</h2>
                  <div className="merged-crop-box">
                    <div className="crop-item">
                      {userData.crops
                        .filter((crop) => crop.season === season)
                        .map((crop, index) => (
                          <h3 key={index}>{crop.crop_name}</h3>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="crop-category">
                <h2>Rest Period</h2>
                <div className="merged-crop-box">
                  <div className="crop-item">
                    {userData.crops
                      .filter((crop) => crop.season !== 1 && crop.season !== 2 && crop.season !== 4)
                      .map((crop, index) => (
                        <h3 key={index}>{crop.crop_name}</h3>
                      ))}
                    <p>Rest Period</p>
                  </div>
                </div>
              </div>
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default CropRotation;
