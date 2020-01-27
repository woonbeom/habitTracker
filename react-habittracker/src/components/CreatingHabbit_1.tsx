import React from 'react';
import { Input } from 'antd';
// import './CreatingHabbit_1.css'
import 'antd/dist/antd.css'

function CreatingHabbit_1 () {
    return (
        <div>
            <div>
                Title
            </div>
            <div>
                <Input placeholder="Title"/>
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
                <Input placeholder="Action"/>
            </div>
        </div>
    );
}

export default CreatingHabbit_1;