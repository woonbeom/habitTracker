import React from 'react';
import './Form.css';

type props = {
    value?: string;
    onChange?: () => void;
    onKeyPress?: () => void;
}

function Form ({ value, onChange, onKeyPress }: props) {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
        </div>
    );
}

export default Form;