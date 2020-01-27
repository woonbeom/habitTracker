import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MainTemplate from './components/MainTemplate';

import Main from './routes/Main';
import Create_1 from './routes/Create_1';
import Form from './components/Form';

// const App: React.FC = () => {
function App () {
  return (
    <Router>
      <MainTemplate form={<Form />} onCreate={()=>{}}> 
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/create_1" component={Create_1}/>
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;
