import React from 'react';
import CardList from 'components/CardList';
import Search from 'components/Search';

import goods from 'assets/goods';
import './homepage.scss';

const HomePage = () => {
  return (
    <div className="content" data-testid="home-page">
      <Search />
      <CardList items={goods} />
    </div>
  );
};

export default HomePage;
