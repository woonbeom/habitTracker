import React from 'react';
import './Form.css';

type props = {
    value?: string;
    onChange?: () => void;
    onCreate?: () => void;
    onKeyPress?: () => void;
}

function Form ({ value, onChange, onCreate, onKeyPress }: props) {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
               추가 
            </div>
        </div>
    );
}

export default Form;