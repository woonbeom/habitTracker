import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css'

const { RangePicker } = DatePicker;

function CreatingHabbit_2 () {
    const [from, setFromDate] = useState("");
    const [to, setToDate] = useState("");

    const onChangeDate = (date, dateString) => {
        setFromDate(dateString[0]);
        setToDate(dateString[1]);
        console.log(`fromDate:${from}`);
        console.log(`toDate:${to}`);
    }

    return (
        <div>
            <div>
                <RangePicker onChange={onChangeDate}/>
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