import React from 'react';
import Header from '$components/Header/Header';
import './style.scss';
import FilterBar from '$components/FilterBar/FilterBar';
import CardView from '$components/CardView/CardView';
import { Footer } from '$components/Footer/Footer';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <FilterBar />
        <CardView />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
export default App;
