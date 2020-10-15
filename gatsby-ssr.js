import React from 'react';
import Layout from './src/components/Layout';

// making a plug in, that will wrap the page element
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
