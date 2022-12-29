import { IDropDownItem } from 'components';

export const defaultClassnames = ['drop__down__container'];
export const testClassnames = ['drop__down__test'];
export const expectedClassnames = [...defaultClassnames, ...testClassnames];

export const testDropdownList = [
  {
    label: 'testLabel1',
    value: 'testValue1'
  } as IDropDownItem,
  {
    label: 'testLabel2',
    value: 'testValue2'
  } as IDropDownItem
] as Array<IDropDownItem>;
