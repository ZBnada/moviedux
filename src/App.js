import './App.css';
import './styles.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MoviesGrid from './component/MoviesGrid';
import WatchList from './component/WatchList';

import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([]);


    useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggelWatchlist = (movieId) =>{
    setWatchlist(prev => 
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }
  
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
               <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid  watchlist={watchlist} movies={movies}  toggelWatchlist={toggelWatchlist} />} />
<Route
  path="/watchlist"
  element={
    <WatchList
      watchlist={watchlist}
      movies={movies}
      toggelWatchlist={toggelWatchlist}
    />
  }
/>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
