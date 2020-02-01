import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './CreatingHabbit_1.css'
import 'antd/dist/antd.css'

function CreatingHabbit_1() {
    const [title, setTitle] = useState("");
    const [cycle, setOnceEveryNDays] = useState("");
    const [action, setAction] = useState("");

    useEffect(() => {
        console.log("렌더링 완료!");
        console.log({
            title,
            cycle,
            action
        });
    }, [title, cycle, action]);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeCycle = (e) => {
        setOnceEveryNDays(e.target.value);
    };

    const onChangeAction = (e) => {
        setAction(e.target.value);
    };

    return (
        <div>
            <div>
                Title
            </div>
            <div>
                <Input className="long-input" value={title} onChange={onChangeTitle} placeholder="Title"/>
            </div>
            <div>
                Cycle
            </div>
            <div>
                Once in <Input value={cycle} onChange={onChangeCycle} placeholder="7"/> days
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
                    <Button size='large' className='create-button'>Next</Button>
                </Link>
            </div>
        </div>
    );
}

export default CreatingHabbit_1;