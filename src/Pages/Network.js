import React, { useState } from 'react';
import './Styles/Network.css';
import profile1 from './profiles/profile1.png';
import profile2 from './profiles/profile2.png';
import profile3 from './profiles/profile3.png';
import profile5 from './profiles/profile5.png';
import profile6 from './profiles/profile6.png';

const profiles = [
  {
    name: 'Maya C',
    organization: 'Farmers land',
    profilePicture: profile1,
    role: 'farmer',
  },
  {
    name: 'Lydia Mejia',
    organization: 'la Tropical',
    profilePicture: profile2,
    role: 'client',
  },
  {
    name: 'Sheindel ',
    organization: 'Farm 123',
    profilePicture: profile3,
    role: 'farmer',
  },
  {
    name: 'Almadelia Duran',
    organization: 'Organic 100%',
    profilePicture: profile5,
    role: 'farmer',
  },
  {
    name: 'Andrea valdez',
    organization: 'la vallarta',
    profilePicture: profile6,
    role: 'client',
  },
  // Add more profiles as needed
];

const Network = () => {
  const [connectedProfileIndex, setConnectedProfileIndex] = useState(null);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const toggleConnection = (index) => {
    if (connectedProfileIndex === index) {
      setConnectedProfileIndex(null);
      // Reset chat when disconnecting
      setChatMessages([]);
    } else {
      setConnectedProfileIndex(index);
      // Initialize chat with a welcome message or other initial content
      setChatMessages([{ text: 'Welcome! Let the conversation begin.', sender: 'system' }]);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
      // You might want to handle responses from the other user or external systems here
      setMessage('');
    }
  };

  const profile = () => {
    return (
      <div className="profile-containers">
        {profiles.map((profile, index) => (
          <div className={`profile-box ${profile.role}`} key={index}>
            <img src={profile.profilePicture} alt="" />
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p>Organization Name: {profile.organization}</p>
              <p>Role: {profile.role}</p>
            </div>
            <button className='connectbtn' onClick={() => toggleConnection(index)}>
              {connectedProfileIndex === index ? 'Chatting..' : 'Chat'}
            </button>
            {connectedProfileIndex === index && (
              <div className="green-dot"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderChatBox = () => {
    if (connectedProfileIndex !== null) {
      return (
        <div className="popup">
          <div className="closebtn" onClick={() => toggleConnection(connectedProfileIndex)}>
            Close Chat
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.sender === 'system' && <p className="system-message">{msg.text}</p>}
                {msg.sender === 'user' && <p className="user-message">{msg.text}</p>}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button className="send-message-btn" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className="Network"> Network</h1>
      {profile()}
      {renderChatBox()}
    </div>
  );
};

export default Network;
