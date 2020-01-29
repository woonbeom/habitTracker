import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './CreatingHabbit_1.css'
import 'antd/dist/antd.css'


function HandleBackButton() {
    <Link to="/"/>
}

function CreatingHabbit_1() {
    return (
        <div>
            <div>
                Title
            </div>
            <div>
                <Input placeholder="Title" className="long-input"/>
            </div>
            <div>
                Cycle
            </div>
            <div>
                Once in <Input placeholder="7"/> days
            </div>
            <div>
                Action
            </div>
            <div>
                <Input placeholder="Action" className="long-input"/>
            </div>
            <div>
                <Button size='large' className='create-button' onClick={HandleBackButton}>Back</Button>
                <Button size='large' className='create-button'>Add</Button>
            </div>
        </div>
    );
}

export default CreatingHabbit_1;