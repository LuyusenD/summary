import React from 'react';
import Parent from './component/demo1/parent'
import Demo3 from './component/demo3'
import Demo4 from './component/demo4'
import Demo5 from './component/demo5'
import Demo6 from './component/demo6'
import Home from './component/home'
import {HashRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/demo1" component={ Parent }></Route>
        <Route path="/demo3" component={ Demo3 }></Route>
        <Route path="/demo4" component={ Demo4 }></Route>
        <Route path="/demo5" component={ Demo5 }></Route>
        <Route path="/demo6" component={ Demo6 }></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
