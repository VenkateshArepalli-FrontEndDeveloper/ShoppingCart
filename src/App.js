import React from 'react'
import {Header} from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouterList from './RouterList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
       <Header />
       <RouterList />      
      </div>
  </Router>
  </MuiThemeProvider>
)

export default App