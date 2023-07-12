import '../css/App.css';
import './footer/footer'
import Footer from './footer/footer';
import Header from './header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './404/404';


function App() {
  return (
    <div className="App">
      <Header />    
        <NotFound/>
      <Footer />
    </div>
  );
}

export default App;
