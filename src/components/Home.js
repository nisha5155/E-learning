import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to My E-Learning Portal!</h1>
      <h3><b>Sign In on the platform to explore the course!</b></h3>
      <p className="description">PLACEMENT PACKAGE FOR THE STUDENT OF COMPUTER SCIENCE & ENGINEERING <br/></p>
      <button className="button">
        <Link to="/course" className="link">
          Start Learning
        </Link>
      </button>
    </div>
  );
};

export default Home;
