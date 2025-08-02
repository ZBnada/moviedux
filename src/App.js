import './App.css';
import './styles.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MoviesGrid from './component/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
