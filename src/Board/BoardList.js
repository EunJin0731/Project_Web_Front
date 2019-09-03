import React from 'react';
import {Link} from 'react-router-dom';

import BoardListItem from './BoardListItem';
import './board.scss';

const BoardList = (props) => {
    return (
        <div>
            <h1>게시판</h1>
            <div className={"info"}>
            <ul className='infobar'>
                <li>제목</li>
                <li>작성자</li>
                <li>작성일자</li>
            </ul>
            </div>
            {props.items.map(item => <BoardListItem key={item.id} post={item} />)}
            <div>
                <Link to='/board/add'>새 글 쓰기 </Link>
            </div>
        </div>
    );
};

export default BoardList;