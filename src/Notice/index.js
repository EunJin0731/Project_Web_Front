import React, {Component} from 'react';
import './index.scss';

class Notice extends Component {
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
                    <tr className="part_10">
                        <td>10</td>
                        <td>관리자</td>
                        <td>2019년 7월 공지사항</td>
                        <td>2019-07-01</td>
                        <td>252</td>
                        <td>18</td>
                    </tr>
                    <tr className="part_9">
                        <td>9</td>
                        <td>관리자</td>
                        <td>2019년 6월 공지사항</td>
                        <td>2019-06-01</td>
                        <td>524</td>
                        <td>14</td>
                    </tr>
                    <tr className="part_8">
                        <td>8</td>
                        <td>관리자</td>
                        <td>2019년 5월 공지사항</td>
                        <td>2019-05-01</td>
                        <td>424</td>
                        <td>24</td>
                    </tr>
                    <tr className="part_7">
                        <td>7</td>
                        <td>관리자</td>
                        <td>2019년 4월 공지사항</td>
                        <td>2019-04-01</td>
                        <td>625</td>
                        <td>27</td>
                    </tr>
                    </tbody>
                </table>
                <a href="/newPost">글쓰기</a>
                <div className="arrow"><pre>&#8810; &#60; 0  1  2  3  4  5  6  7  8  9  &#62; &#8811;</pre></div>
            </div>
        );
    }
}

export default Notice;