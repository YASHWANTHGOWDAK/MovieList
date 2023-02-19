
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Addmovie from './Addmovie';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Moviedetail from './Moviedetail';
import UpdateMovie from './UpdateMovie';
import SearchMovie from './SearchMovie';

function App() {
  return (
     <Router>
    <div className="App">

     <Nav/>
     <Switch>
      <Route exact path="/">
     <Home/>
     </Route>

     <Route path="/addmovie">
     <Addmovie/>
     </Route>

     <Route path="/moviedetail:id">
    <Moviedetail/>
     </Route>

     <Route path="/update:id">
      <UpdateMovie/>
     </Route>

     <Route path="/searchmovie:searchKeyword">
      <SearchMovie/>
     </Route>
     
     </Switch>
    </div>
    </Router>
  )
}

export default App;
