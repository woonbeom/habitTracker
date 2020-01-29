import React from 'react';
import { Button } from 'antd';
import './MainTemplate.css';
import 'antd/dist/antd.css';

// 컴포넌트에 전달된 인자들에 대한 타입을 정의.
type props = {
    form: React.ReactNode; // ? <- optional.
    onCreate?: () => void;
    children: React.ReactNode;
};

// 리액트 컴포넌트 = js 함수. 그래서 functional component라고 불림.
function MainTemplate ({ form, onCreate ,children }: props) {
    return (
        <main className="main-template">
            <div className="title">
                <div>
                    My Habbits
                </div>
                {/* <div className="create-button" onClick={onCreate}>
                    TODO: + 버튼 꾸미기
                </div> */}
                <Button size='large' className='create-button'>Add</Button>
            </div>
            <section className="habits-wrapper">
                { children }
            </section>
        </main>
    );
}

export default MainTemplate;