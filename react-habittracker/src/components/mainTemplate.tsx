import React from 'react';
import './mainTemplate.css';

// 컴포넌트에 전달된 인자들에 대한 타입을 정의.
declare namespace JSX {
    type IntrinsicElements = {
        form: React.ReactNode;
        children: React.ReactNode;
    };
}

function mainTemplate ({form, children}: IntrinsicElements) {
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