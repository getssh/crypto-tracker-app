import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../components/Home';

const mockStore = configureStore([thunk]);

describe('Home', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      trending: {
        isLoading: false,
        trending: [
          {
            id: 'bitcoin',
            coin_id: 'bitcoin',
            name: 'Bitcoin',
            market_cap_rank: 1,
            img: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
          },
          {
            id: 'ethereum',
            coin_id: 'ethereum',
            name: 'Ethereum',
            market_cap_rank: 2,
            img: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
          },
        ],
        error: null,
      },
    });
  });

  it('renders the search input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('filters the coins based on the search input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'Bit' } });

    const bitcoinCoin = screen.getByText('Bitcoin');
    expect(bitcoinCoin).toBeInTheDocument();

    const ethereumCoin = screen.queryByText('Ethereum');
    expect(ethereumCoin).not.toBeInTheDocument();
  });

  it('Renders the Home component', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    await screen.findByText('STATS BY TRENDING COIN');
    await screen.findByText('TRENDING COINS');

    expect(screen.getByText('STATS BY TRENDING COIN')).toBeInTheDocument();
    expect(screen.getByText('TRENDING COINS')).toBeInTheDocument();
  });

  it('Test coin list rendering', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    await screen.findByText('Bitcoin');
    await screen.findByText('Ethereum');

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });
});

