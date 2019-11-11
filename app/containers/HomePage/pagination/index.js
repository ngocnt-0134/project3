/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Pagination
import ListPage from 'components/PaginationPage/ListPage';
import ItemPage from 'components/PaginationPage/Item';
import LinkPage from 'components/PaginationPage/Link';
import ButtonPage from 'components/PaginationPage/Button';

import theme from 'components/Theme/index';
function PaginationBlock({ onGetPage, currentPage, isShow }) {
  // console.log(currentPage);
  const page = currentPage === '' ? '1' : currentPage;
  const [coefficient, setCoefficient] = useState(0);
  const numPageinList = 5;
  const numbers = [1, 2, 3, 4, 5];
  const expressPage = numPageinList * Math.floor(coefficient);
  function checkPage() {
    if (page > 5 && page % 5 === 0) setCoefficient(page / 5 - 1);
    if (page > 5 && page % 5 !== 0) setCoefficient(page / 5);
  }
  useEffect(() => {
    checkPage();
  }, [page]);

  return (
    <ListPage className={isShow}>
      <ItemPage>
        {coefficient > 0 && (
          <ButtonPage
            type="button"
            className="btn--prev"
            theme={theme}
            onClick={() => setCoefficient(coefficient - 1)}
          >
            <i className="fas fa-caret-left" />
          </ButtonPage>
        )}
        {coefficient === 0 && <div>&nbsp;</div>}
      </ItemPage>
      {numbers.map(number => (
        <ItemPage theme={theme} key={expressPage + number}>
          <LinkPage
            theme={theme}
            className={`${expressPage + number}` === page ? 'active' : ''}
            onClick={() => onGetPage(`${expressPage + number}`)}
          >
            {expressPage + number}
          </LinkPage>
        </ItemPage>
      ))}
      <ItemPage>
        <ButtonPage
          type="button"
          className="btn--next"
          theme={theme}
          onClick={() => setCoefficient(coefficient + 1)}
        >
          <i className="fas fa-caret-right" />
        </ButtonPage>
      </ItemPage>
    </ListPage>
  );
}
PaginationBlock.propTypes = {
  onGetPage: PropTypes.func,
  currentPage: PropTypes.string,
  isShow: PropTypes.string,
};
export default PaginationBlock;
