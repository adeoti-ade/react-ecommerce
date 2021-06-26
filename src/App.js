import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './default.css'
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            ) } />
          </Switch>
          <Switch>
            <Route path="/registration" render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            ) } />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
