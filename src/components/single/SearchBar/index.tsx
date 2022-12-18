import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Button } from 'components';
import { useActions, useTypedSelector } from 'hooks';
import { SEARCH_COMPONENT } from 'utils';
import { SearchParams } from 'utils/router';
import './style.scss';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { searchQuery: searchQueryParam } = useParams<SearchParams>();
  const { searchQuery: searchQueryStore } = useTypedSelector(
    store => store.searchMovies
  );
  const [searchParams] = useSearchParams();
  const { setSearchText } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    const searchValueProp = searchQueryParam ? searchQueryParam : '';
    setSearchQuery(searchValueProp);
    setSearchText(searchValueProp);
  }, []);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = target;
    if (searchQuery !== inputValue) {
      setSearchQuery(inputValue);
      navigate({
        pathname: inputValue,
        search: `?${searchParams.toString()}`
      });
    }
  };

  const submitSearch = (event: any): void => {
    if (
      ((event.type === 'keydown' && event.key === 'Enter') ||
        event.type === 'click') &&
      searchQueryStore !== searchQuery
    ) {
      setSearchText(searchQuery);
    }
  };

  return (
    <div className='search__container'>
      <div className='headline upper__text'>{SEARCH_COMPONENT.headline}</div>
      <input
        type='text'
        className='input'
        placeholder={SEARCH_COMPONENT.placeholder}
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={submitSearch}
      />
      <Button onClick={submitSearch} {...SEARCH_COMPONENT.button} />
    </div>
  );
};
