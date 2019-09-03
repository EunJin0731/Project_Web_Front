import {observable, action} from 'mobx';
import axios from 'axios';

import Signup from "../SignUp/signup";

class SignUpStore {
    static __instance = null;

    static getInstance() {
        if (SignUpStore.__instance === null)
            SignUpStore.__instance = new SignUpStore();
        return SignUpStore.__instance;
    }

    constructor() {
        SignUpStore.__instance = this;
    }

    @action signUp = async (user) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/addUser`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'post',
                timeout: 3000,
                data: JSON.stringify(user)
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    };

    @action login = async (user) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/login`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'post',
                timeout: 3000,
                data: JSON.stringify(user)
            });
            if (response.data &&  response.status === 200){
                return true;
            }
            return false;
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    };
}

export default SignUpStore.getInstance();