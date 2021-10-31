import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/aboutUs" component={AboutUs} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
