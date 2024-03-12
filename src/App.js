import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div >
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
