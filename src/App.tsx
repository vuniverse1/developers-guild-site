import React from 'react';
import Landing from './components/landing';
import Login from './components/login';
import Signup from './components/signup';
import ListingTemplate from './components/listing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/example-listing" component={ListingTemplate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
