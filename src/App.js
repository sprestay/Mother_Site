import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';



class App extends Component{

  render () {
    return (
      <SimpleReactLightbox>
      <BrowserRouter>
        <div>
        <Main/>
        </div>
      </BrowserRouter>
      </SimpleReactLightbox>
    );
  }
}

export default App;
