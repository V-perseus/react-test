import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import TOC from './Components/TOC';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       navbar:{title:'Hello', desc:'Nice to meet you'},
       content: {title: 'You are welcome', desc:'You are getting big'},
       tocs: [
         {id:1, title:'THTML', desc:'very nice hand'},
         {id:2, title:'TKLJSB', desc:'Could you open the door?'},
         {id:3, title:'TKJDLKFJ', desc:'Great idea!'}
       ]
       
    }
  }
  
  
  render() {
    return (
      <div>
        <Navbar title={this.state.navbar.title} desc={this.state.navbar.desc} /> 
        <Content title={this.state.content.title} desc={this.state.content.desc} />
        <TOC data={this.state.tocs}/>
      </div>
    )
  }
}

export default App
