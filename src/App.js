import React from "react";
import HomeComponent from "./components/home/HomeComponent";
// import ProjectsPageComponent from "./components/projectsPage/ProjectsPageComponent";
// import AboutComponent from "./components/about/AboutComponent";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import "./App.css";

function App() {
  return (
    // Setup for react-router
    // <Router basename={process.env.PUBLIC_URL}>
    //   <div className="App" >
    //   <NavbarComponent/>
    //     <Switch>
    //       <Route path='/' exact component={HomeComponent}/>
    //       <Route path='/about'  component={AboutComponent}/>
    //       <Route path='/projects'  component={ProjectsPageComponent}/>
    //     </Switch>

    //   </div>
    // </Router>

    <div className="App">
      <NavbarComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
