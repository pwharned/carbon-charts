import React, { Component } from 'react';
import { Button, Content,Theme } from '@carbon/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '@carbon/charts-react/styles.css'

class App extends Component {
  render() {
    return (
      <>
	   <BrowserRouter>
	    <BrowserRouter>
  <Theme theme="g100">
  </Theme>
  <Content>
    <Switch>
    </Switch>
  </Content>
</BrowserRouter>
</BrowserRouter> 
      </>
    );
  }
}


export default App;
