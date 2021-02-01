import './App.css';
import './assets/css/main.css';

/**
 * CUSTOM IMPORTS
 */
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Featured from './components/Featured';
import Content from './components/Content';


function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Banner />
      <Featured />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
