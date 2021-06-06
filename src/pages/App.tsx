import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';

import Layout from '~components/Layout';
import HomeContainer from '~containers/HomeContainer';

interface AppProps {
  store: EnhancedStore;
}

const App = ({ store }: AppProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={HomeContainer} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
