import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Footer} from './components'
// pages
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import SinglePage from './pages/SinglePage'
import LearnPage from './pages/LearnPage'
import AboutPage from './pages/AboutPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/learn' component={LearnPage} />
        <Route exact path='/collections' component={CollectionPage} />
        <Route exact path='/collections/object/:id' component={SinglePage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
