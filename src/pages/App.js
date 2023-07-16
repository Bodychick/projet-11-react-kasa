import '../css/App.css';
import './footer/footer'
import Footer from './footer/footer';
import Header from './header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './404/404';
import Home from './home/home'


function App() {
  return (
    <div className="App">
      <Header />  
        
        <Router>
            <Routes>
                <Route path="/404" element={<NotFound />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
