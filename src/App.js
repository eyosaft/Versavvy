import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Error from './Component/Error';
import Nav from './Component/Nav';





const App=()=> {
  return(
    <div>
      <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/testimonials" component={Testimonials}/>
      <Route component={Error}/>
    </Switch>
  </div>
  )
}

export default App;