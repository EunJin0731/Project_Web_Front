import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import './index.scss';

@inject('stores')
@observer
class Suggestions extends Component {
    render() {
        return (
            <div>
                <select name='count'>
                    <option value='4' selected>4개씩 보기</option>
                    <option value='8'>8개씩 보기</option>
                    <option value='12'>12개씩 보기</option>
                    <option value='16'>16개씩 보기</option>
                </select>
                <input type="text" size="50" className="search"/>
                <select name='sort'>
                    <option value='new' selected>최신 글 순</option>
                    <option value='recommendation'>추천수 순</option>
                    <option value='views'>조회수 순</option>
                </select><br/>
                <table className="b">
                    <thead>
                    <tr className="part_th">
                        <th className="no">NO</th>
                        <th className="writer">작성자</th>
                        <th className="title">제목</th>
                        <th className="createdTime">작성시간</th>
                        <th className="views">조회수</th>
                        <th className="recommendation">추천수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>43</td>
                        <td>2314 홍길동</td>
                        <td>기숙사 건의사항 입니다</td>
                        <td>2019-06-27</td>
                        <td>25</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>42</td>
                        <td>3201 서광덕</td>
                        <td>기숙사에 대한 건의사항</td>
                        <td>2019-06-11</td>
                        <td>23</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>41</td>
                        <td>1202 비슬이</td>
                        <td>교실 불편한 점 건의 드립니다</td>
                        <td>2019-05-22</td>
                        <td>14</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>40</td>
                        <td>3103 예보람</td>
                        <td>건의드려요</td>
                        <td>2019-04-20</td>
                        <td>65</td>
                        <td>7</td>
                    </tr>
                    </tbody>
                </table>
                <a href="/newPost">글쓰기</a>
                <div className="arrow"><pre>&#8810; &#60; 0  1  2  3  4  5  6  7  8  9  &#62; &#8811;</pre></div>
            </div>
        );
    }
}

export default Suggestions;