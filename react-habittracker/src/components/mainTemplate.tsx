import React from 'react';
import './mainTemplate.css';

// 컴포넌트에 전달된 인자들에 대한 타입을 정의.
type props = {
    form?: React.ReactNode; // ? <- optional.
    children?: React.ReactNode;
};

// 리액트 컴포넌트 = js 함수. 그래서 functional component라고 불림.
function mainTemplate ({ form, children }: props) {
    return (
        <main className="main-template">
            <div className="title">
                습관 만들기
            </div>
            <section className="from-wrapper">
                { form }
            </section>
            <section className="habits-wrapper">
                { children }
            </section>
        </main>
    );
}

export default mainTemplate;