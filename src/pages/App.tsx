import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EnhancedStore } from '@reduxjs/toolkit';
import { CircularProgress } from '@material-ui/core';

import Layout from '~components/Layout';
import HomeContainer from '~containers/HomeContainer';

// const HomeContainer = lazy(() => import('~containers/HomeContainer'));

interface AppProps {
  store: EnhancedStore;
}

// const App = ({ store }: AppProps) => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <Layout>
//         <Suspense fallback={<CircularProgress />}>
//           <Switch>
//             <Route path="/" component={HomeContainer} exact />
//           </Switch>
//         </Suspense>
//       </Layout>
//     </BrowserRouter>
//   </Provider>
// );

const App = ({ store }: AppProps) => (
  <Layout>
    <HomeContainer />
  </Layout>
);

export default App;
