import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/store';

describe('Home', () => {
  it('renders the Home component', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Wait for the fetchCoins Promise to resolve
    await screen.findByText('STATS BY TRENDING COIN');

    expect(screen.getByText('STATS BY TRENDING COIN')).toBeInTheDocument();
    expect(screen.getByText('STATS BY TRENDING COIN')).toBeInTheDocument();
    expect(screen.getByText('STATS BY TRENDING COIN')).toBeInTheDocument();
  });
});
