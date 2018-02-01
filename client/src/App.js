import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Mailer from './components/Mailer';
import FAQs from './components/FAQs';
import GuestList from './components/GuestList';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import MyFooter from './components/MyFooter';

const App = () => (
      <div>
        <NavBar />
        <FetchUser>
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/mailer" component={Mailer} />
             <Route exact path="/faqs" component={FAQs} />
             <Route exact path="/guestlist" component={GuestList} />
             <Route exact path="/login" component={Login} />
             <ProtectedRoute exact path="/register" component={Register} />
             <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <MyFooter />
      </div>


)

export default App;

