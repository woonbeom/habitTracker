
import React from 'react';
import { Input, TimePicker, Checkbox } from 'antd';
import './CreatingHabbit_3.css'
import 'antd/dist/antd.css'
import moment from 'moment';

function onTimePickerChange(time, timeString) {
    console.log(time, timeString);
}

function onCheckboxChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function CreatingHabbit_3 () {
    return (
        <div>
            <div>
                How to log 
            </div>
            <div>
                Q.<Input placeholder="How to log"/> 
            </div>
            <div>
                When to log
            </div>
            <div>
                <Checkbox onChange={onCheckboxChange}>Mon</Checkbox>
                <Checkbox onChange={onCheckboxChange}>Tue</Checkbox>
                <Checkbox onChange={onCheckboxChange}>Wed</Checkbox>
                <Checkbox onChange={onCheckboxChange}>Thu</Checkbox>
                <Checkbox onChange={onCheckboxChange}>Fri</Checkbox>
                <Checkbox onChange={onCheckboxChange}>Sat</Checkbox>
                <Checkbox onChange={onCheckboxChange}>Sun</Checkbox>
            </div>
            <div>
                <TimePicker onChange={onTimePickerChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
        </div>
    );
}

export default CreatingHabbit_3;