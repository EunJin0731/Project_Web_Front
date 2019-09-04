import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import './index.scss'

@inject('stores')
@observer
class HOME extends Component {
    render() {
        return (
            <div>
                <h1>최신 글</h1><br/>
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
                        <td>10</td>
                        <td>관리자</td>
                        <td>2019년 7월 공지사항</td>
                        <td>2019-07-01</td>
                        <td>252</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>43</td>
                        <td>2314홍길동</td>
                        <td>기숙사 건의사항 입니다.</td>
                        <td>2019-06-27</td>
                        <td>25</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>질문자</td>
                        <td>학교 입학 관련 질문 입니다.</td>
                        <td>2019-06-15</td>
                        <td>7</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>관리자</td>
                        <td>2019년 6월 공지사항</td>
                        <td>2019-06-01</td>
                        <td>625</td>
                        <td>152</td>
                    </tr>
                    </tbody>
                </table>
                <a href="/newPost">글쓰기</a>
                <div className="arrow"><pre>&#8810; &#60; 0  1  2  3  4  5  6  7  8  9  &#62; &#8811;</pre></div>
            </div>
        );
    }
}

export default HOME;