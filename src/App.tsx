import React from 'react';
import Header from 'containers/Header/Header';
import Logo from 'common/logo/Logo';
import { Button } from 'common/button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import { ADD_MOVE_BUTTON } from 'utils/constant';
import './style.scss';
import FilterBar from 'containers/FilterBar/FilterBar';
import CardView from 'components/CardView/CardView';
import { Footer } from 'containers/Footer/Footer';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import GenreBar from 'components/GenreBar/GenreBar';
import SortBar from 'components/SortBar/SortBar';

const App = () => {
  return (
    <>
      <Header>
        <Logo />
        <Button frontData={ADD_MOVE_BUTTON} onClick={() => {}} />
        <SearchBar />
      </Header>
      <ErrorBoundary>
        <FilterBar>
          <GenreBar />
          <SortBar />
        </FilterBar>
        <CardView />
      </ErrorBoundary>
      <Footer>
        <Logo />
      </Footer>
    </>
  );
};
export default App;
