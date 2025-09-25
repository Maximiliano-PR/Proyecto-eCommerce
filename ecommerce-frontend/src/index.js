import React from 'react';
import { BrowserRouter,Routes , Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import PageHome from './pages/pageHome';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<PageHome/>}/>
      <Route path='/Terminos' element={<FaqPage/>}/>
      <Route path='/Contact' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
