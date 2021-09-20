import React from 'react'
import Main from './components/Main'
import './App.css';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <>
      <div>
        <Navbar title='BooksSpot.com' aboutText='About company' />
      </div>
      <div>
        <Main />
      </div>
    </>
  );
}

