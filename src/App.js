import './App.scss';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Works from './components/Works';
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWorks } from './redux/actions';
import { useSelector } from "react-redux";
import About from './components/About';
import Contact from './components/Contacts';

function App() {

  const repos = useSelector(state => state.works.works);
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(fetchWorks())
  }, [dispatch])

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path="/React_portfolio/" element={<Works repos={repos} />}></Route>
        <Route path="/React_portfolio/about" element={<About />}></Route>
        <Route path="/React_portfolio/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
