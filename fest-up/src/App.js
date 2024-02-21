import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import EventsPage from "./pages/EventsPage";
import ListYourEventPage from "./pages/ListYourEventPage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
      <Route path="/" Component={Layout}>
          <Route index Component={HomePage} />
          <Route path="/EventsPage" Component={EventsPage} />
          <Route path="/ListYourEventPage" Component={ListYourEventPage} />
          <Route path="*" component={NoPage} />
          
      </Route>
      </Routes>
     <Footer/>
    </Router>

    </>
  )

};

export default App;
