import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './default.css'
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';

import {auth, handleUserProfile } from './firebase/util'

const initialState = {
  currentuser: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  };

  authListener = null;

  componentDidMount() {
    console.log("componentDidMount")
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile({userAuth});
        userRef.onSnapshot( snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({ 
        ...initialState
      })
    });
  };

  componentWillUnmount() {
    this.authListener()
  };
  render() {
    const { currentUser } = this.state; // destructuring the state attribute to get the currentUser
    return (
      <BrowserRouter>
        <div className="App">
  
            <Switch>
              <Route exact path="/" render={() => (
                <HomepageLayout currentUser={currentUser}> 
                  <Homepage />
                </HomepageLayout>
              ) } />
            </Switch>
            <Switch>
              <Route path="/registration" render={() => (
                <MainLayout currentUser={currentUser}>
                  <Registration />
                </MainLayout>
              ) } />
            </Switch>
            <Switch>
              <Route path="/login" 
                render={() => currentUser ? <Redirect to="/"/> : (
                  <MainLayout currentUser={currentUser}>
                    <Login />
                  </MainLayout>
                ) } />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
