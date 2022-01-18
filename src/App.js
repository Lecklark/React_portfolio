import './App.scss';
import Header from './components/Header';
import { Route } from "react-router-dom";
import Works from './components/Works';
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchWorks } from './redux/actions';
import { useSelector } from "react-redux";
import About from './components/About';
import Contact from './components/Contacts';
import { CSSTransition } from 'react-transition-group';

function App() {

  const repos = useSelector(state => state.works.works);
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(fetchWorks())
  }, [dispatch])


  const routes = [
    { path: '/', name: 'Работы', Component: <Works repos={repos} /> },
    { path: '/about', name: 'Обо мне', Component: <About /> },
    { path: '/contact', name: 'Контакты', Component: <Contact /> },
  ]


  return (
    <div className='wrapper'>
      <Header routes={routes} />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                {Component}
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div >
  );
}

export default App;
