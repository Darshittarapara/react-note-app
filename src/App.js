import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddNotes from './components/addNotes/AddNotes';
import DisplayNotes from './components/displayNotes/DisplayNotes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchNote from './components/searchNote/SearchNote';


function App() { 

 useEffect(()=> {
  localStorage.clear();
},[])
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<AddNotes />} />
          <Route path='/display' element={<DisplayNotes />} />
          <Route path='/search' element={<SearchNote />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
