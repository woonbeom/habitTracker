import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './CreatingHabbit_1.css'
import 'antd/dist/antd.css'

function CreatingHabbit_1() {
    const initHabbitObject = (() => {
        const habbitObject = {
            title: "",
            description: "",
            cycle: {from: "", to: "", onceEveryNDays: ""},
            action: {title: ""},
            logging: {questionnaire: [], alarms: []},
            reminder: []
        }
        sessionStorage.setItem('habbit', JSON.stringify(habbitObject));
    })();

    const [title, setTitle] = useState("");
    const [onceEveryNDays, setOnceEveryNDays] = useState("");
    const [action, setAction] = useState("");

    useEffect(() => {
        console.log("렌더링 완료!");
        console.log({
            title,
            onceEveryNDays,
            action
        });
    }, [title, onceEveryNDays, action]);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeOnceEveryNDays = (e) => {
        setOnceEveryNDays(e.target.value);
    };

    const onChangeAction = (e) => {
        setAction(e.target.value);
    };

    const onClickNextButton = () => {
        if (sessionStorage.getItem('habbit')) {
            let habbit = JSON.parse(sessionStorage.getItem('habbit') || '');
            habbit.title = title;
            habbit.cycle.onceEveryNDays = onceEveryNDays;
            habbit.action.title = action;
            sessionStorage.setItem('habbit', JSON.stringify(habbit));
            console.log(habbit);
        }
    };

    return (
        <div>
            <div>
                Title
            </div>
            <div>
                <Input className="long-input" value={title} onChange={onChangeTitle} placeholder="Title" />
            </div>
            <div>
                Cycle
            </div>
            <div>
                Once in <Input value={onceEveryNDays} onChange={onChangeOnceEveryNDays} placeholder="7" /> days
            </div>
            <div>
                Action
            </div>
            <div>
                <Input className="long-input" value={action} onChange={onChangeAction} placeholder="Action" />
            </div>
            <div>
                <Link to="/">
                    <Button size='large' className='create-button'>Back</Button>
                </Link>
                <Link to="/create_2">
                    <Button size='large' className='create-button' onClick={onClickNextButton}>Next</Button>
                </Link>
            </div>
        </div>
    );
}

export default CreatingHabbit_1;