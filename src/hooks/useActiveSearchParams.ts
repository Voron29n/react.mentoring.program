import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IDropDownItem } from 'components';

export const useActiveSearchParams = (
  changeCallback: () => void,
  searchName: string,
  activeList: Array<IDropDownItem>,
  activeValue: IDropDownItem,
  setActiveValue: (
    activeSortType: IDropDownItem,
    searchParams: URLSearchParams,
    setSearchParams: (searchParams: URLSearchParams) => void
  ) => void
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const refActive = useRef<boolean>(false);

  useEffect(() => {
    const searchParam = searchParams.get(searchName);
    const searchValue = activeList.find(({ value }) => value === searchParam);
    setActiveValue(
      searchValue ? searchValue : activeList[0],
      searchParams,
      setSearchParams
    );
  }, []);

  useEffect(() => {
    if (!refActive.current) {
      refActive.current = true;
      return;
    }

    changeCallback();
  }, [activeValue]);

  const handleSelectedActive: (selectedValue: IDropDownItem) => void =
    useCallback(
      (selectedValue: IDropDownItem) => {
        setActiveValue(selectedValue, searchParams, setSearchParams);
      },
      [setActiveValue]
    );

  return { handleSelectedActive };
};
