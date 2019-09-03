import React, {Component} from 'react';

import './index.scss'
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Page2 extends Component {
    render() {
        return (
            <div className={Page2}>
                <h1>Login</h1>
                <div>
                    <input placeholder={"아이디"}/><p/>
                    <input placeholder={"비밀번호"} type="password"/><p/>
                    <button onClick={this.LoginUser}>로그인</button>
                </div>
            </div>
        );
    }

    LoginUser = async (user) => {
        if (this.props.user_id && await this.props.stores.ProfileStore.LoginUser(this.state)) {
            await this.props.stores.ProfileStore.fetchItems();
            this.setState({
                ...this.state,
                goToMain: true
            });
        }
    };
}

export default Page2;