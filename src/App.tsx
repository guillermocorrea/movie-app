import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import GlobalStateProvider from './store/GlobalStateProvider';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <GlobalStateProvider>
        <Router>
          <Header />
          <div className={styles.mainContainer}>
            <Switch>
              <Route exact path='/movies/:movieId'>
                <MovieDetails />
              </Route>
              <Route path='/'>
                <MovieList />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
