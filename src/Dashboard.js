import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

function Dashboard() {
  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    console.log('Logout clicked');
  };

  return (
    <div>
      {/* Navigation bar */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={liStyle}>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          </li>
          {/* Add more navigation links if needed */}
          <li style={liStyle}>
            <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          </li>
        </ul>
      </nav>

      {/* Employee list */}
      <div style={containerStyle}>
        <h2 style={headerStyle}> </h2>
        <ProductList />
      </div>
    </div>
  );
}

// Styles
const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  display: 'inline',
  margin: '0 10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const containerStyle = {
  margin: '20px',
};

const headerStyle = {
  color: '#333',
};

export default Dashboard;
