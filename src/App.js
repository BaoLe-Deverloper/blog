import React, { Component } from 'react';

import {BrowserRouter , Route} from "react-router-dom"
import Home_page from "./components/home_page"
import Category_page from "./components/category_page"
import Post_page from "./components/post_page"
import './App.css';

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
          <Route path="/" exact component={Home_page}></Route>
          <Route path="/category"  component={Category_page}></Route>
          <Route path="/post/:id"  component={Post_page}></Route>
      </BrowserRouter>      
    );
  }
}

export default App;
