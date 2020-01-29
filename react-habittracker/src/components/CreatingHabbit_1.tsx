import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './CreatingHabbit_1.css'
import 'antd/dist/antd.css'

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