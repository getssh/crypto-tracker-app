// CoinDetail.test.js

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CoinDetail from '../components/CoinDetail';

const mockStore = configureStore([thunk]);

describe('CoinDetail', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      coinDetail: {
        isLoading: false,
        coin: {
          id: 'bitcoin',
          name: 'Bitcoin',
          image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
          market_data: {
            current_price: {
              usd: 49000,
            },
            price_change_percentage_24h: 5.5,
          },
        },
        error: null,
      },
    });
  });

  it('renders the coin name and price', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/coins/bitcoin']}>
          <Routes>
            <Route path="/coins/:id">
              <CoinDetail />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('$49,000')).toBeInTheDocument();
  });

  it('renders the coin image', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/coins/bitcoin']}>
          <Routes>
            <Route path="/coins/:id">
              <CoinDetail />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText('Bitcoin')).toHaveAttribute(
      'src',
      'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'
    );
  });

  it('renders the price change percentage', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/coins/bitcoin']}>
          <Routes>
            <Route path="/coins/:id">
              <CoinDetail />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('5.5%')).toBeInTheDocument();
  });
});
