//packages
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
//components
import Navbar from "./components/Navbar";
//pages
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Singlepage from './pages/Singlepage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={Aboutpage} />
          <Route path='/singlepage/:id' component={Singlepage} />
        </Switch>
        {/* homepage route */}
        {/* about page route */}
        {/* single show details page route*/}
      </div>

    </Router>
  );
}

export default App;
