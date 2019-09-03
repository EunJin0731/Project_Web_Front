import React, {Component} from 'react';
import "./login.scss";
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            goToMain: false
        };
    }

    render() {
        return (
            <div>
                아이디 <input className="id" placeholder="id" onChange={this.updateAccount}/><br/>
                비밀번호 <input className="password" placeholder="password" type="password" onChange={this.updatePassword}/><br/>
                <button onClick={this.login}>확인</button> <button onClick={this.signUp}>회원가입</button>
            </div>
        );
    }

    updateAccount = event => {
        this.setState({
            account : event.target.value
        });
    }

    updatePassword = event => {
        this.setState({
            password : event.target.value
        });
    }


    login = async () => {
        if(await this.props.stores.SignUpStore.login(this.state)){
            alert("로그인 성공");
            this.setState({
                ...this.state,
                //goToMain: true
            });
        }
    };

    lost = () => {
        if(window.confirm('아이디 / 패스워드 분실신고 진행하시겠습니까?') == false) return;
    }
}

export default Login;