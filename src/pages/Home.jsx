import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <Button type="primary" onClick={() => navigate('/about')}>
        Go to About
      </Button>
    </div>
  );
};

export default Home;
