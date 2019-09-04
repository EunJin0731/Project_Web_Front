import React, {Component} from 'react';
import './signup.scss';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class Signup extends Component {
    /*state = {
        goToList: false,
        goToEdit: false
    }; */

    // componentDidMount() {
    //     this.props.stores.SignUpStore.fetchItem(this.props.postid);
    // }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            account: '',
            password: '',
            gender: '',
            age: '',
            goToMain: false
        };

        /*if (this.props.id && this.props.stores.SignUpStore.viewItem !== null)
            this.state = {
                ...this.state,
                id: this.props.stores.SignUpStore.viewItem.id,
                title: this.props.stores.SignUpStore.viewItem.title,
                content: this.props.stores.SignUpStore.viewItem.content,
            };*/
    }

    render() {
        return (
            <div>
                <div>
                    프로필 사진 <input type="file"/><br/>
                    이름 <input type="text"/><br/>
                    아이디 <input type="text"/><br/>
                    비밀번호 <input type="password"/><br/>
                    비밀번호 확인 <input type="password"/><br/>
                    성별 <input type="radio" name="gender"/>여 <input type="radio" name="gender"/>남<br/>
                    나이 <select name='age'>
                    <option value='10' selected>10대</option>
                    <option value='20'>20대</option>
                    <option value='30'>30대</option>
                    <option value='40'>40대</option>
                    <option value='50'>50대</option>
                </select><br/>
                </div>
                <button onClick={this.signUp}>회원가입</button><button onClick={this.cancel}>취소</button>
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

    updateName = event => {
        this.setState({
            name : event.target.value
        });
    }

    updateAge = event => {
        this.setState({
            address : event.target.value
        });
    }

    updateGender = event => {
        this.setState({
            email : event.target.value
        });
    }

    signUp = async (event) => {
        if(window.confirm('가입하시겠습니까?') === false) return;

        await this.props.stores.SignUpStore.signUp(this.state);
        this.setState({
            ...this.state,
            //goToMain: true
        });
        //let id = this.props.signid;
        //if (await this.props.stores.SignUpStore.SignUp(signid)) {
            //await this.props.stores.SignUpStore.fetchItems();
            //this.setState({ goToList: true });

            // await this.props.stores.PostStore.fetchItems();
            // this.setState({
            //     ...this.state,
            //     goToMain: true
            // });
    }

    cancel = () => {
        if(window.confirm('취소하시겠습니까?') === false) return;
    }
}

export default Signup;