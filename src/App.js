import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CoinDetail from './components/CoinDetail';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
