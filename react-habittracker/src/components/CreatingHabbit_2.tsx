import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

function CreatingHabbit_2 () {
    return (
        <RangePicker onChange={onChange}/>
    );
}

export default CreatingHabbit_2;