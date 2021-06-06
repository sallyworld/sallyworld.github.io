import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';

import Layout from '~components/Layout';

const HomeContainer = lazy(() => import('~containers/HomeContainer'));

interface AppProps {
  store: EnhancedStore;
}

const App = ({ store }: AppProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" component={HomeContainer} exact />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
