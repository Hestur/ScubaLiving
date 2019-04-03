import React, { Component } from 'react';
import './index.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import {BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="gridlayout">
        <BrowserRouter>
<AppHeader />
<Route exact path="/" component={Home}/>
<Route path="/shop" component={Shop}/>
<AppFooter />
</BrowserRouter>
      </div>
    );
  }
}

export default App;
