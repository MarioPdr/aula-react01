import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name, age, telephone, address, isStudent }) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Age: {age}</p>
    <p>Telephone: {telephone}</p>
    <p>Address: {address}</p>
    <p>{isStudent ? 'You are a student.' : 'You are not a student.'}</p>
  </div>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  telephone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  isStudent: PropTypes.bool,
};

Greeting.defaultProps = {
  isStudent: false,
};

export default Greeting;