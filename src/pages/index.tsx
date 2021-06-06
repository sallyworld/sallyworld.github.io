import React from 'react';

import { initialize } from '~helpers/axios';
import store from '~states/store';

import App from './App';

initialize(store);

const Index = () => (
  <React.StrictMode>
    <App
      store={store}
    />
  </React.StrictMode>
);

export default Index;
