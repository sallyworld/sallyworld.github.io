import { EnhancedStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { omit } from 'lodash';

import { SHOW_LOADER, HIDE_LOADER } from '~states/constants/global';
import { Dispatch } from '~states/store';

const configureInterceptor = (dispatch: Dispatch) => {
  axios.interceptors.request.use((config) => {
    const { needsAsyncLoader } = config.params || config.data || {};

    if (needsAsyncLoader) {
      dispatch({ type: SHOW_LOADER });

      if (config.params) {
        config.params = omit(config.params, ['needsAsyncLoader']);
      }

      if (config.data) {
        config.data = omit(config.data, ['needsAsyncLoader']);
      }
    }

    return config;
  }, (error) => {
    dispatch({ type: HIDE_LOADER });
    return Promise.reject(error);
  });

  axios.interceptors.response.use((response) => {
    dispatch({ type: HIDE_LOADER });
    return response.data;
  }, (error) => {
    dispatch({ type: HIDE_LOADER });
    return Promise.reject(error);
  });
};

export const initialize = ({ dispatch }: EnhancedStore) => {
  axios.defaults.withCredentials = true;
  configureInterceptor(dispatch);
};

export default axios;
