import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from 'components/SearchHome/SeachBox';
import SearchInput from 'components/SearchHome/SearchInput';
import SearchButton from 'components/SearchHome/SearchButton';

function SearchBoxCotainer({ onGetText, onSearchFirm, currentText }) {
  function handleSearch() {
    if (currentText !== '') {
      setTimeout(() => {
        onSearchFirm();
      }, 500);
    }
    // console.log('ko tim gi ca');
  }
  return (
    <SearchBox>
      <SearchInput
        type="text"
        placeholder="Search..."
        defaultValue={currentText}
        onChange={e => onGetText(e.target.value)}
      />
      <SearchButton onClick={() => handleSearch()}>
        <span className="fa fa-search">&nbsp;</span>
      </SearchButton>
    </SearchBox>
  );
}
SearchBoxCotainer.propTypes = {
  onGetText: PropTypes.func,
  onSearchFirm: PropTypes.func,
  currentText: PropTypes.string,
};
export default SearchBoxCotainer;
