import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Layout from './containers/Layout/Layout';

import HomePage from './pages/HomePage/HomePage';
import LoadsPage from './pages/LoadsPage/LoadsPage';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import DevicesPage from './pages/DevicesPage/DevicesPage';
import MomentsPage from './pages/MomentsPage/MomentsPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/loads' component={LoadsPage} />
          <Route path='/rooms' component={RoomsPage} />
          <Route path='/devices' component={DevicesPage} />
          <Route path='/moments' component={MomentsPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
