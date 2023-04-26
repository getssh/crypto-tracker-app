import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CoinDetail from '../components/CoinDetail';
const mockStore = configureStore([thunk]);


describe('CoinDetail component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      coins: {
        isLoading: false,
        coins: {
          id: 'bitcoin',
          market_cap_rank: 12,
          coingecko_rank: 231,
          community_score: 76,
          liquidity_score: 934676,
          sentiment_votes_up_percentage: 32,
          sentiment_votes_down_percentage: 68,
          watchlist_portfolio_users: 4871,
        },
        error: null,
      },
    });
  });

  it('renders coin details', async () => {

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinDetail match={{ params: { id: 'bitcoin' } }} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/TRENDING COIN DETAIL/i)).toBeInTheDocument();
    expect(screen.getByText(/Coin Id/i)).toBeInTheDocument();
    expect(screen.getByText(/Market Cap Rank/i)).toBeInTheDocument();
    expect(screen.getByText(/Coingecko Rank/i)).toBeInTheDocument();
    expect(screen.getByText(/Liquidity Score/i)).toBeInTheDocument();
    expect(screen.getByText(/Votes Up Percentage/i)).toBeInTheDocument();
    expect(screen.getByText(/Votes Down Percentage/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio Users/i)).toBeInTheDocument();
  });

  it('renders coin values', async () => {

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(),
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinDetail match={{ params: { id: 'bitcoin' } }} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('bitcoin')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('231')).toBeInTheDocument();
    expect(screen.getByText('76')).toBeInTheDocument();
    expect(screen.getByText('934676')).toBeInTheDocument();
    expect(screen.getByText('32')).toBeInTheDocument();
    expect(screen.getByText('68')).toBeInTheDocument();
    expect(screen.getByText('4871')).toBeInTheDocument();
  });
});
