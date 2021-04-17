import React from 'react';
import './App.scss'
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AdminRouteProtect from './pages/AdminRouteProtect';
import { useState } from 'react';

export const IsAdminContext = React.createContext('')

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  
  return (
    <div className="App"> 
          <IsAdminContext.Provider value={{setIsAdmin, isAdmin}}>
            <Router>
              <Header />
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route path='/blog'>
                    <Blog />
                  </Route>
                  <Route path='/about'>
                    <About />
                  </Route>
                  <Route path='/contact'>
                    <Contact />
                  </Route>
                  <Route path='/admin'>
                    <AdminRouteProtect />
                  </Route>
                </Switch>
            </Router>
            <Footer />
          </IsAdminContext.Provider>
    </div>
  );
}

export default App;
