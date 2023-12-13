import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Book from './components/book/Book';
import Contact from './components/contact/Contact'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

export default function App() {
  return (    
    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="book" element={<Book />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    
    </Router>

  )
}