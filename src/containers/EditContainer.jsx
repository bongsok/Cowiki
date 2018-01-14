// @flow

import React from 'react';

import connectWithRouter from '../../modules/connectWithRouter';
import Edit from '../components/Edit';

const EditContainer = () => (
  <Edit />
);

export default connectWithRouter(
  null,
  null,
)(EditContainer);