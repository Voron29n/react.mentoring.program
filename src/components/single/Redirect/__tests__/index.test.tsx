import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import { Redirect } from '../index';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));
const redirectPath = 'test';
describe('Redirect component', () => {
  let redirectRender: RenderResult;

  beforeEach(() => {
    redirectRender = render(
      <MemoryRouter initialEntries={['']}>
        <Redirect redirectPath={redirectPath} />
      </MemoryRouter>
    );
  });

  it('renders', () => {
    expect(screen.getByText('Redirected...')).toBeInTheDocument();
  });

  it('navigate works', () => {
    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toBeCalledWith(redirectPath);
  });

  it('Redirect snapshot', () => {
    expect(redirectRender).toMatchSnapshot();
  });
});
