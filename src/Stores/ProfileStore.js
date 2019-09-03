import React, {Component} from 'react';
import {observable, action} from 'mobx';
import axios from 'axios';

class ProfileStore {
    static __instance = null;
    static getInstance() {
        if(ProfileStore.__instance === null)
            ProfileStore.__instance = new ProfileStore();
        return ProfileStore.__instance;
    }
    constructor() {
        ProfileStore.__instance = this;
    }

    @action LoginUser = async (user_id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/user/${user_id}`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                timeout: 3000,
                data: JSON.stringify(user_id)
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    };

    @action LogoutUser = async (userId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/user/${userId}`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                timeout: 3000,
                data: JSON.stringify(userId)
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    };
}

export default ProfileStore.getInstance();