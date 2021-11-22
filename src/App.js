import React, { Component } from 'react'
import Form from './components/Form';
import PreviewButton from './components/PreviewButton';

class App extends Component{
  render(){
    return(
      <div>
        <Form />
        <PreviewButton />
      </div> 
    )
  }
}

export default App;
