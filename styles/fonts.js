/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const font = (process.env.NODE_ENV !== 'test' && themeConfig && themeConfig.font) ? themeConfig.font : {};

const styles = {
  family: 'system, -apple-system, "SF Pro Display", "Helvetica Neue", "Lucida Grande"',
  rootSize: 17,
  lineHeight: 1.43,
  ...font,
};

css.global('body', {
  font: `${styles.rootSize}px/${styles.lineHeight} ${styles.family}`,
});

export default styles;
