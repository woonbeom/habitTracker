import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="create_1">
                    <Button size='large' className='create-button'>Back</Button>
                </Link>
                <Link to="create_3">
                    <Button size='large' className='create-button'>Next</Button>
                </Link>
            </div>
        </div>

    );
}

export default CreatingHabbit_2;