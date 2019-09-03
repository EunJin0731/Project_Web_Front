import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import './index.scss'

@inject('stores')
@observer
class HOME extends Component {
    /*state = {
      boardData: null
    };

    async componentDidMount(){
        let result = await this.fetchList();
        this.setState({boardData: result})
    }*/

    render() {
        let t = this.props.stores.TimeStore;
        let p = this.props.stores.PostStore;
        return (
            <div className="HOME">
                <div>{t.current_time && t.current_time.toString()}</div>
                <div>{t.ms}</div>
                <div><button onClick={t.getTime}>getTime from TimeStore</button></div>
                <div>{p.post_time && p.post_time.toString()}</div>
                <div><button onClick={p.getTime}>getTime from PostStore</button></div>
                <div><button onClick={p.fetchItems}>fetch Posts</button></div>
                <div>{p.items && p.items.map(item =>(
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.content}</div>
                        <div>{new Date(item.created).toLocaleDateString()}</div>
                    </div>
                ))}</div>
            </div>
        );
    }
}

export default HOME;