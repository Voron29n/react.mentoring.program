import React, { RefObject } from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GenreBarItem } from '../index';
import { activeClassname, testDropdownItem } from './mocks';

const onClick = jest.fn();

describe('GenreBarItem component', () => {
  let ref: RefObject<HTMLLIElement>;
  let genreBarItemRender: RenderResult;

  beforeEach(() => {
    ref = React.createRef();
    genreBarItemRender = render(
      <GenreBarItem
        genreBarItem={testDropdownItem}
        isActive={true}
        onClick={onClick}
        ref={ref}
      />
    );
  });

  it('renders', () => {
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('testLabel')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass(activeClassname);
    expect(ref.current).not.toBeNull();
  });

  it('onClick works', async () => {
    await userEvent.click(screen.getByRole('listitem'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(testDropdownItem);
  });

  it('GenreBarItem snapshot', () => {
    expect(genreBarItemRender).toMatchSnapshot();
  });
});

describe('GenreBarItem component non active', () => {
  let ref: RefObject<HTMLLIElement>;
  let genreBarItemRender: RenderResult;

  beforeEach(() => {
    ref = React.createRef();
    genreBarItemRender = render(
      <GenreBarItem
        genreBarItem={testDropdownItem}
        isActive={false}
        onClick={onClick}
        ref={ref}
      />
    );
  });

  it('renders', () => {
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('testLabel')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).not.toHaveClass(activeClassname);
    expect(ref.current).toBeNull();
  });

  it('GenreBarItem snapshot', () => {
    expect(genreBarItemRender).toMatchSnapshot();
  });
});
