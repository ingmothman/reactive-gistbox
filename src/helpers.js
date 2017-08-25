import React from 'react';
import ReactLoading from 'react-loading';

export const upperCaseFirst = (value) => {
  const str = String(value);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.',
  );
}

let API_BASE_URL = false;
if (NODE_ENV === 'development') {
  API_BASE_URL = 'http://localhost:9914';
} else {
  API_BASE_URL = 'http://gistbox.osmancode.me/api';
}

/**
 * Combine the URI part with the api base url.
 * @param uri The Uri part with the leading slash
 * @returns {string}
 */
export const apiUrl = (uri) => {
  return `${API_BASE_URL}${uri}`;
};

export const reactLoading = (isSmall = false, type = 'bubbles') => {
  if (isSmall === true) {
    return (<ReactLoading
      delay={0}
      className="sub-loader"
      type={type}
      color={'#333'}
      height={14}
      width={14}
    />);
  }
  return (<ReactLoading
    delay={0}
    className="box-center sub-loader"
    type={type}
    color={'#333'}
    height={70}
    width={70}
  />);
};
