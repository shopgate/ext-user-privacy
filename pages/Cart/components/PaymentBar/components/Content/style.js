/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';
import variables from 'Styles/variables';

const container = css({
  padding: `${variables.gap.small}px`,
  lineHeight: 1.45,
  flexWrap: 'wrap',
}).toString();

const column = css({
  padding: `0 ${variables.gap.small}px`,
}).toString();

const labelColumn = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}).toString();

const costsColumn = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}).toString();

const checkoutButtonContainer = css({
  padding: `${variables.gap.big}px ${variables.gap.big}px`,
  paddingTop: 0,
  paddingBottom: 10,
}).toString();

const checkoutButton = css({
  width: '100%',
}).toString();

export default {
  container,
  column,
  labelColumn,
  costsColumn,
  checkoutButton,
  checkoutButtonContainer,
};
