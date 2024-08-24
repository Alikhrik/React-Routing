import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Router } from './components/Router/Router';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Basket } from './components/Basket/Basket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />}>
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
