import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <ul>
    <li key={name}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  </ul>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
