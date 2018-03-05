/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// FEATURES
const APP = 'app';
const PAGE = 'page';
const NAV_MENU = 'nav-menu';
const NO_RESULTS = 'no-results';

// CONTENTS
const GLOBALS = 'globals';
const ROUTES = 'routes';
const HEADER = 'header';
const CONTENT = 'content';
const CATEGORIES = 'categories';
const FAVORITES = 'favorites';
const HOME = 'home';

// POSITIONS
const BEFORE = 'before';
const AFTER = 'after';

export const APP_GLOBALS = `${APP}.${GLOBALS}`;
export const APP_ROUTES = `${APP}.${ROUTES}`;
export const PAGE_CONTENT_BEFORE = `${PAGE}.${CONTENT}.${BEFORE}`;
export const PAGE_CONTENT = `${PAGE}.${CONTENT}`;
export const PAGE_CONTENT_AFTER = `${PAGE}.${CONTENT}.${AFTER}`;

export const NAV_MENU_HEADER_BEFORE = `${NAV_MENU}.${HEADER}.${BEFORE}`;
export const NAV_MENU_HEADER = `${NAV_MENU}.${HEADER}`;
export const NAV_MENU_HEADER_AFTER = `${NAV_MENU}.${HEADER}.${BEFORE}`;

export const NAV_MENU_CONTENT_BEFORE = `${NAV_MENU}.${CONTENT}.${BEFORE}`;
export const NAV_MENU_CONTENT_AFTER = `${NAV_MENU}.${CONTENT}.${AFTER}`;

export const NAV_MENU_HOME_BEFORE = `${NAV_MENU}.${HOME}.${BEFORE}`;
export const NAV_MENU_HOME = `${NAV_MENU}.${HOME}`;
export const NAV_MENU_HOME_AFTER = `${NAV_MENU}.${HOME}.${BEFORE}`;

export const NAV_MENU_CATEGORIES_BEFORE = `${NAV_MENU}.${CATEGORIES}.${BEFORE}`;
export const NAV_MENU_CATEGORIES = `${NAV_MENU}.${CATEGORIES}`;
export const NAV_MENU_CATEGORIES_AFTER = `${NAV_MENU}.${CATEGORIES}.${BEFORE}`;

export const NAV_MENU_FAVORITES_BEFORE = `${NAV_MENU}.${FAVORITES}.${BEFORE}`;
export const NAV_MENU_FAVORITES = `${NAV_MENU}.${FAVORITES}`;
export const NAV_MENU_FAVORITES_AFTER = `${NAV_MENU}.${FAVORITES}.${BEFORE}`;

export const NO_RESULTS_CONTENT_BEFORE = `${NO_RESULTS}.${CONTENT}.${BEFORE}`;
export const NO_RESULTS_CONTENT = `${NO_RESULTS}.${CONTENT}`;
export const NO_RESULTS_CONTENT_AFTER = `${NO_RESULTS}.${CONTENT}.${AFTER}`;
