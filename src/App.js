import React from 'react';
import HomeComponent from './components/home/HomeComponent';
import ProjectsPageComponent from './components/projectsPage/ProjectsPageComponent';
import AboutComponent from './components/about/AboutComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import ContactComponent from './components/contact/ContactComponent';


function App() {

  return (
    <Router >
      <div className="App">
      <NavbarComponent/>
        
        <Switch>
          <Route path='/' exact component={HomeComponent}/>
          <Route path='/about'  component={AboutComponent}/>
          <Route path='/projects'  component={ProjectsPageComponent}/>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
