import URLSearchParams from 'url-search-params';
import createBrowserHistory from 'history/createBrowserHistory';

const match = /^(.*)index.html/.exec(window.location.pathname);

/**
 * Creates the router history.
 */
export const history = createBrowserHistory({
  basename: match ? match[0] : '/test123/index',
});

/**
 * Transforms a given URL query string to an object.
 * @param {string} queryString An URL query string.
 * @returns {Object}
 */
export const parseQueryStringToObject = (queryString = null) => {
  if (!queryString) {
    return {};
  }

  const urlParams = new URLSearchParams(queryString);
  const keys = Array.from(urlParams.keys());

  return keys.reduce((obj, key) => ({
    ...obj,
    [key]: urlParams.get(key),
  }), {});
};

/**
 * Transforms a given object to an URL query string.
 * @param {Object} obj An object with keys/values.
 * @param {boolean} [includePrefix=true] If true a `?` is prefixed.
 * @returns {string}
 */
export const parseObjectToQueryString = (obj, includePrefix = true) => {
  if (!obj) {
    return '';
  }

  const urlParams = new URLSearchParams();
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return '';
  }

  keys.forEach(key => urlParams.set(key, obj[key]));

  if (includePrefix) {
    return `?${urlParams.toString()}`;
  }

  return urlParams.toString();
};
