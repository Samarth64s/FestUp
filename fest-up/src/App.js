import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ListYourEventPage from "./pages/ListYourEventPage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/FestUp" index Component={HomePage} />
            <Route path="/EventsPage" Component={EventsPage} />
            <Route path="/ListYourEventPage" Component={ListYourEventPage} />
            <Route path="*" component={NoPage} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
