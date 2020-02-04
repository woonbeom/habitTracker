import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, TimePicker, Checkbox, Row, Col, Button } from 'antd';
import './CreatingHabbit_4.css'
import 'antd/dist/antd.css'
import moment from 'moment';

function CreatingHabbit_4 () {
    const [title, setTitle] = useState('');
    const [weekdays, setWeekdays] = useState([]);
    const [time, setTime] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
        console.log(`title: ${title}`);
    }

    const onChangeWeekdays = (checkedValues) => {
        setWeekdays(checkedValues);
        console.log(`checked Weekdays: ${checkedValues}`);
    };

    const onChangeTime = (time, timeString) => {
        setTime(timeString);
        console.log(`time: ${time}`);
    }

    const onClickFinishButton = () => {
        if (sessionStorage.getItem('habbit')) {
            let habbit = JSON.parse(sessionStorage.getItem('habbit') || '');

            let alarmObject = {
                from: "",
                to: "",
                everyDayOfTheWeeks: [],
                time: ""
            }

            alarmObject.from = habbit.cycle.from;
            alarmObject.to = habbit.cycle.to;
            alarmObject.everyDayOfTheWeeks = weekdays;
            alarmObject.time = time;          

            habbit.reminder = alarmObject;

            sessionStorage.setItem('habbit', JSON.stringify(habbit));

            console.log(habbit);
        }
    };

    return (
        <div>
            <div>
                Reminder
            </div>
            <div>
                <Input onChange={onChangeTitle}/> 
            </div>
            <div>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChangeWeekdays}>
                    <Row>
                        <Col span={3}>
                            <Checkbox value='1'>Mon</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='2'>Tue</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='3'>Wed</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='4'>Thu</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='5'>Fri</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='6'>Sat</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='7'>Sun</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
           </div>
            <div>
                <TimePicker onChange={onChangeTime} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
            <div>
                <Link to="create_3">
                    <Button size='large' className='create-button'>Back</Button>
                </Link>
                <Link to="success">
                    <Button size='large' className='create-button' onClick={onClickFinishButton}>Finish</Button>
                </Link>
            </div>
        </div>
    );
}

export default CreatingHabbit_4;