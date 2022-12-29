export const emptyTestButton = {
  text: 'test'
};

export const testButton = {
  type: 'button' as 'submit' | 'reset' | 'button',
  text: 'test',
  classNames: ['test__button']
};

export const defaultType = 'button';
export const commonButtonClassnames = 'common__button';
export const expectedClassnames = [
  commonButtonClassnames,
  ...testButton.classNames
];
