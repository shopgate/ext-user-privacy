/**
 * Copyright (c) 2017 - present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from 'Components/CardList';
import Item from './components/Item';
import styles from './style';

/**
 * Favorites list. Renders items if available.
 * @property {Array} products Products.
 * @returns {JSX}
 */
class FavoritesList extends Component {

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  };

  static defaultProps = {
    product: [],
  };

  /**
   * Checks if component should be updated.
   * @param {Object} nextProps Next props.
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps) {
    return this.props.products.length !== nextProps.products.length;
  }

  render() {
    if (!this.props.products.length) {
      return null;
    }
    return (
      <div className={styles.container}>
        <CardList>
          {this.props.products.map(product => <Item key={product.id} product={product} />)}
        </CardList>
      </div>
    );
  }
}

export default FavoritesList;
