import React from 'react';
import Header from '$components/Header/Header';
import './style.scss';
import FilterBar from '$components/FilterBar/FilterBar';
import CardView from '$components/CardView/CardView';
import { Footer } from '$components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <FilterBar />
      <CardView />
      <Footer />
    </>
  );
};
export default App;
