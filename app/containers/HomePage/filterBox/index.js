/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import FilterList from 'components/FilterHome/FilterList';
import FilterItem from 'components/FilterHome/FilterItem';
import FilterLink from 'components/FilterHome/FilterLink';
import theme from 'components/Theme/index';
import Categories from './constants';

function FilterBox({ id, onGetFilter }) {
  return (
    <FilterList>
      {Categories.map(item => (
        <FilterItem
          className={item.id === id ? 'active' : ''}
          key={item.id}
          theme={theme}
        >
          <FilterLink theme={theme} onClick={() => onGetFilter(item)}>
            {item.value}
          </FilterLink>
        </FilterItem>
      ))}
    </FilterList>
  );
}
FilterBox.propTypes = {
  id: PropTypes.string,
  onGetFilter: PropTypes.func,
};
export default FilterBox;
