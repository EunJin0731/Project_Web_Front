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
            account: '',
            password: '',
            name: '',
            phone: '',
            mobile: '',
            zipcode: '',
            address: '',
            email: '',
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
                    프로필 사진 <br/>
                    이름 <input type="text"/><br/>
                    아이디 <input type="text"/><br/>
                    비밀번호 <input type="text"/><br/>
                    비밀번호 확인 <input type="text"/><br/>
                    성별 <input type="text"/><br/>
                    나이 <input type="text"/><br/>
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

    updatePhone = event => {
        this.setState({
            phone : event.target.value
        });
    }

    updateMobile = event => {
        this.setState({
            mobile : event.target.value
        });
    }

    updateZipcode = event => {
        this.setState({
            zipcode : event.target.value
        });
    }

    updateAddress = event => {
        this.setState({
            address : event.target.value
        });
    }

    updateEmail = event => {
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

    openZipSearch = () =>{

    }
}

export default Signup;