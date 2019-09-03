import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import './App.scss';
import SignUp from './SignUp/signup';
import Login from './Login/login';
import Stores from './Stores';
import Basket from "./Basket/basket";
import Category from "./Category/category";
import Product from "./Product/product";

const App = () => (
    <Provider stores={Stores}>
      <BrowserRouter>
        <header className='app-header'>
          <ul className='menubar'>
            <li><Link className='menuitem' to="/">HOME</Link></li>
            <li><Link className='menuitem' to="/">공지사항</Link></li>
            <li><Link className='menuitem' to="/">건의사항</Link></li>
            <li><Link className='menuitem' to="/">Q&A</Link></li>
            <li><Link className='menuitem' to="/login">로그인</Link></li>
            <li><Link className='menuitem' to="/signup">회원가입</Link></li>
            <li><Link className='menuitem' to="/">My Page</Link></li>
            <li><Link className='menuitem' to="/basket">장바구니</Link></li>
          </ul>
        </header>

        <section className='app-body'>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/' exact component={Category}/>
          <Route path='/basket' exact component={Basket}/>
          <Route path='/product/:command/:param' exact component={Product} />
        </section>
      </BrowserRouter>
    </Provider>
);

export default App;
