import React, { Component } from 'react';
import './HabitItem.css';

type props = {
    text?: string;
    checked?: string;
    id?: string;
    onToggle?: (id: string) => void;
    onRemove?: () => void;
}

class HabitItem extends Component<props> {
    render() {
        // text: habit 내용
        // checked: 체크박스 상태
        // id: habit 고유 아이디
        // onToggle: 체크박스를 켜고 끄는 함수
        // onRemove: 아이템을 삭제시키는 함수
        const { text, checked, id, onToggle, onRemove } = this.props;

        return(
            // <div className="habit-item" onClick={() => onToggle(id)}>
            <div className="habit-item">
                <div className="romove" onClick={(e) => {
                    e.stopPropagation(); // onToggle이 실행되지 않도록 함
                    {/*onRemove(id)*/}}
                }>&times;</div>
                <div className={`habit-text ${ checked ? 'checked' : '' }`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default HabitItem;