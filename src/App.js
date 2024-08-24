import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Router } from './components/Router';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Basket } from './components/Basket';
import { NavigateRouter } from './components/NavigateRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Router />}> */}
        <Route path="/" element={<NavigateRouter />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="basket" element={<Basket />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <footer className='footer'>Footer</footer>
    </BrowserRouter>
  );
}

export default App;
