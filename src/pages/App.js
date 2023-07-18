import '../css/App.css';
import '../composants/footer/footer'
import Footer from '../composants/footer/footer';
import Header from '../composants/header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './404/404';
import Home from './home/home'
import Article from './article/article'


function App() {

  return (
    <div className="App">
      <Header />  
        <Router>
            <Routes>
                <Route path="/404" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/logement" element={<Article />} />
            </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
