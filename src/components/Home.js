import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { getHome } from '../redux/homeSlice';
import { Link } from 'react-router-dom';


const Home = () => {
  const {trending} = useSelector((state) => state.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    if (trending.length > 0) {
      return;
    }
    dispatch(getHome());
  }, [dispatch])

  const [query, setQuery] = useState('');

  const filteredData = trending.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input className="py-1 pl-5 w-full border border-1 border-black" placeholder="Search" type="text" value={query} onChange={handleChange} />
      <div className="flex justify-around items-center bg-[#fd5294] text-white py-7">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-30 text-[#555]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
      <p className="font-medium">TRENDING COINS</p>
      </div>
      <h3 className='bg-[#df4783] text-white pl-2'>STATS BY TRENDING COIN</h3>

      {
        trending &&
        <>
          <div className='grid grid-cols-2 justify-center home-grid'>
            {
            filteredData.map((coin, i) => {
              const evenClass = `flex flex-col p-3 py-4 bg-[#dd4983]`;
              const oddClass = `flex flex-col p-3 py-4 bg-[#d04379]`;
              const gridClass = i == 0 || i == 3 || i == 4 ? evenClass : oddClass;
              return (
                <Link to={`/${coin.id}`} key={coin.coin_id}>
                  <div className={gridClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-end text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className='self-center pr-6 my-4'>
                        <img src={coin.img} alt="coin image"/>
                    </span>
                    <h3 className='text-white self-end'>{coin.name}</h3>
                    <p className='text-white self-end'>{coin.market_cap_rank}</p>
                  </div>
                </Link>
              )
            })
            }
          </div>
        </>
      }
    </div>
  )
}

export default Home;