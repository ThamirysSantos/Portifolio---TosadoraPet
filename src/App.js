import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Certificates from './pages/Certificates';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Certificates" component={Certificates} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
