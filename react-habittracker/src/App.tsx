import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MainTemplate from './components/MainTemplate';

import Main from './routes/Main';
import Create_1 from './routes/Create_1';
import Create_2 from './routes/Create_2';
import Create_3 from './routes/Create_3';
import Form from './components/Form';

// const App: React.FC = () => {
function App () {
  return (
    <Router>
      <MainTemplate form={<Form />} onCreate={()=>{}}> 
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/create_1" component={Create_1}/>
          <Route path="/create_2" component={Create_2}/>
          <Route path="/create_3" component={Create_3}/>
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default App;
