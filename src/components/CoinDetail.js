import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getCoin } from '../redux/coinSlice';
import { useEffect } from 'react';


const CoinDetail = () => {
  const params = useParams();
  const {coins, isLoading, error} = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoin(params.id));
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-around items-center bg-[#fd5294] text-white py-7">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-30 text-[#444]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
        <p className="font-medium">{coins.name}</p>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <h3 className='bg-[#df4783] text-white pl-2 py-1'>TRENDING COIN DETAIL</h3>
      <div className="flex justify-between px-3 bg-[#ef5390] py-6 text-white">
        <p className="text-lg">Coin Id</p>
        <div className="flex gap-5">
          <p>{coins.id}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#cf4278] py-6 text-white">
        <p className="text-lg">Market Cap Rank</p>
        <div className="flex gap-5">
          <p>{coins.market_cap_rank}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#ef5390] py-6 text-white">
        <p className="text-lg">Coingecko Rank</p>
        <div className="flex gap-5">
          <p>{coins.coingecko_rank}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#cf4278] py-6 text-white">
        <p className="text-lg">Community Score</p>
        <div className="flex gap-5">
          <p>{coins.community_score}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#ef5390] py-6 text-white">
        <p className="text-lg">Liquidity Score</p>
        <div className="flex gap-5">
          <p>{coins.liquidity_score}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#cf4278] py-6 text-white">
        <p className="text-lg">Votes Up Percentage</p>
        <div className="flex gap-5">
          <p>{coins["sentiment_votes_up_percentage"]}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#ef5390] py-6 text-white">
        <p className="text-lg">Votes Down Percentage</p>
        <div className="flex gap-5">
          <p>{coins["sentiment_votes_down_percentage"]}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
      <div className="flex justify-between px-3 bg-[#cf4278] py-6 text-white">
        <p className="text-lg">Portfolio Users</p>
        <div className="flex gap-5">
          <p>{coins["watchlist_portfolio_users"]}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>  
        </div>
      </div>
    </div>
  )
}

export default CoinDetail;