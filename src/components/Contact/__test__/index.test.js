import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<ContactForm/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>);
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders title', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })

  it('renders submit', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })
})