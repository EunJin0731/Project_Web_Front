import React, {Component} from 'react';
import './index.scss';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class NewPost extends Component {
    render() {
        return (
            <div>
                <div>
                    제목 <input type="text" width="1200"/><br/>
                    내용 <br/><textarea rows="500" cols="150"></textarea>
                    <br/>
                    <button>등록</button>
                </div>
            </div>
        );
    }
}

export default NewPost;