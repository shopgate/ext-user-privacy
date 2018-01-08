/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  RECEIVE_FAVORITES,
  REQUEST_FAVORITES,
  ERROR_FETCH_FAVORITES,
  FAVORITES_LIFETIME,
} from '../constants';

/**
 * Favorites reducer.
 * @param {Object} state Current state.
 * @param {Object} action Dispatched action.
 * @returns {Object} New state.
 */
const products = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_FAVORITES:
      return {
        ...state,
        isFetching: true,
        ids: state.ids || [],
        expires: 0,
      };
    case RECEIVE_FAVORITES:
      return {
        ...state,
        isFetching: false,
        expires: Date.now() + FAVORITES_LIFETIME,
        ids: action.products.map(product => product.id),
      };
    case ERROR_FETCH_FAVORITES:
      return {
        ...state,
        isFetching: false,
        ids: [],
        expires: 0,
      };
    default:
      return state;
  }
};

export default products;
