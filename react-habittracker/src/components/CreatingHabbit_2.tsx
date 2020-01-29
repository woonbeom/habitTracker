import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css'

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

function CreatingHabbit_2 () {
    return (
        <div>
            <div>
                <RangePicker onChange={onChange}/>
            </div>
            <div>
                <Button size='large' className='create-button'>Back</Button>
                <Button size='large' className='create-button'>Next</Button>
            </div>
        </div>

    );
}

export default CreatingHabbit_2;