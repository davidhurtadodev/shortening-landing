import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import StatisticsContainer from './StatisticsContainer';
import BoostContainer from './BoostContainer';
import Footer from './Footer';

export default () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <StatisticsContainer />
      <BoostContainer />
      <Footer />
    </div>
  );
};
