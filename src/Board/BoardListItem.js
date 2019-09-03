import React from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

const BoardListItem = (props) => {
    let {post} = props;
    console.log(post);
    let created = new Date(post.created);
    let link = `/board/view/${post.id}`;
    return (
        <div className='board-list-item'>
            <div>
                <ul className='listItem'>
                    <li><Link to={link}>{post.title}</Link></li>
                    <li>{post.user_id}</li>
                    <li>
                        {created.getMonth() + 1}
                        /
                        {created.getDate()}
                        &nbsp;
                        {created.getHours()}
                        :
                        {created.getMinutes()}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BoardListItem;