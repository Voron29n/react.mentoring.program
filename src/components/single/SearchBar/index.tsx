import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Button } from 'components';
import { useActions, useTypedSelector } from 'hooks';
import { SearchParams } from 'utils/router';
import './style.scss';

interface ISearchBarProps {
  headline: string;
  placeholder: string;
  button: {
    text: string;
    classNames: Array<string>;
  };
}

export const SearchBar = ({
  headline,
  button,
  placeholder
}: ISearchBarProps) => {
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

  const submitSearch = useCallback(
    (event: any): void => {
      if (
        ((event.type === 'keydown' && event.key === 'Enter') ||
          event.type === 'click') &&
        searchQueryStore !== searchQuery
      ) {
        setSearchText(searchQuery);
      }
    },
    [searchQuery, searchQueryStore, setSearchText]
  );

  return (
    <div className='search__container'>
      <div className='headline upper__text'>{headline}</div>
      <input
        type='text'
        className='input'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={submitSearch}
      />
      <Button
        text={button.text}
        classNames={button.classNames}
        onClick={submitSearch}
      />
    </div>
  );
};
