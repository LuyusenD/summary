import React from 'react';
import Login from './page/login'
import Home from './page/home'
import Ucenter from './page/ucenter'
import NotFound from './page/404'
import Demo from './page/demo'
import Shop from './page/shop'

import Book from './page/routerNesting/book'
import JavaBook from './page/routerNesting/javabook'
import WebBook from './page/routerNesting/webbook'

import './style.css'
// import { BrowserRouter as Router , Route ,Link } from 'react-router-dom'
import { HashRouter as Router , Route ,Link ,Switch, NavLink } from 'react-router-dom'

const bookChild = [{JavaBook},{WebBook}]

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <NavLink exact activeClassName="selected" activeStyle={{color:'red'}} to="/"> Home页面 </NavLink><br/>
          <NavLink exact activeClassName="selected" 
            to={{
              pathname:"/login",
              search: "?id=1001&name=Tom",
              hash:"#has",
              state:{ token:"OIJfijOjIJfbUEBVy83&VE89D8FW9V*E&V93" }
            }}
          > Login页面 </NavLink> <br/>
          <NavLink  activeClassName="selected" to="/login/ucenter/2222/tomxiaodi"> Ucenter页面 </NavLink><br/>
          <NavLink  activeClassName="selected" to="/shop"> shop页面 </NavLink>
        </div>
        <p>组件:</p>
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route exact path="/login" component={ Login }></Route>
          <Route path="/login/ucenter/:id?/:name?" component={ Ucenter }></Route>
          <Route path="/demo" render={ (props) => <Demo {...props} name="Tom"/>}></Route>
          <Route path="/shop" component={ Shop }></Route>
          <Book>
            <Switch>
              {
                bookChild.map((el,index) => {
                  console.log(el);
                  return <Route key={index} component={el[Object.keys(el)[0]]} path={`/book/${Object.keys(el)[0]}`}></Route>
                })
              }
                 {/* <Route component={JavaBook} path={`/book/javabook`}></Route> */}

            </Switch>
          </Book>
          <Route component={ NotFound }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
