import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import HomePage from '../components/HomePage';
//import ContactPage from '../components/ContactPage';
import Layout from '../components/Layout';
//import WorkPage from '../components/WorkPage';
//import ReallySmoothScroll from 'really-smooth-scroll';
//import ScrollToTop from '../components/ScrollToTop';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Layout} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
