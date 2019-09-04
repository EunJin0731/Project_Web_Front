import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import './App.scss';
import SignUp from './SignUp/signup';
import Login from './Login/login';
import Stores from './Stores';
import Notice from "./Notice";
import QA from "./QA/index";
import HOME from "./HOME/index";
import Suggestions from "./Suggestions/index";
import MyPage from "./MyPage/index";
import NewPost from "./NewPost/index";

const App = () => (
    <Provider stores={Stores}>
      <BrowserRouter>
        <header className='app-header'>
          <ul className='menubar'>
            <li><Link className='menuitem' to="/">HOME</Link></li>
            <li><Link className='menuitem' to="/notice">공지사항</Link></li>
            <li><Link className='menuitem' to="/suggestions">건의사항</Link></li>
            <li><Link className='menuitem' to="/qa">Q&A</Link></li>
            <li><Link className='menuitem' to="/login">로그인</Link></li>
            <li><Link className='menuitem' to="/mypage">My Page</Link></li>
          </ul>
        </header>

        <section className='app-body'>
          <Route path='/' exact component={HOME}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/qa' exact component={QA}/>
          <Route path='/notice' exact component={Notice}/>
          <Route path='/mypage' exact component={MyPage}/>
          <Route path='/newpost' exact component={NewPost}/>
          <Route path='/suggestions' exact component={Suggestions}/>
        </section>
      </BrowserRouter>
    </Provider>
);

export default App;
