import React  from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import OurDestination from './OurDestination';
import OurPlans from './OurPlans';
import Contact from './Contact';


const App = () =>{
    return(
        <>
        <NavBar />
        <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/destination' component={OurDestination} />
    <Route exact path='/plans' component={OurPlans} />
    <Route exact path='/contact' component={Contact} />
    <Redirect to='/' />
  </Switch>
        </>
    )
}

export default App;