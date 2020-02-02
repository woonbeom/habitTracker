
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, TimePicker, Checkbox, Row, Col, Button } from 'antd';
import './CreatingHabbit_3.css'
import 'antd/dist/antd.css'
import moment from 'moment';

function CreatingHabbit_3 () {
    const [question, setQuestion] = useState('');
    const [weekdays, setWeekdays] = useState([]);
    const [time, setTime] = useState('');

    const onChangeQuestion = (e) => {
        setQuestion(e.target.value);
        // console.log(`question: ${question}`);
    }

    const onChangeWeekdays = (checkedValues) => {
        setWeekdays(checkedValues);
        console.log(`checked Weekday: ${checkedValues}`);
    };

    const onChangeTime = (timeString) => {
        setTime(timeString);
        console.log(`time: ${time}`);
    }

    return (
        <div>
            <div>
                How to log 
            </div>
            <div>
                Q.<Input placeholder="How to log" onChange={onChangeQuestion}/> 
            </div>
            <div>
                When to log
            </div>
            <div>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChangeWeekdays}>
                    <Row>
                        <Col span={3}>
                            <Checkbox value='Mon'>Mon</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='Tue'>Tue</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='Wed'>Wed</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='Thu'>Thu</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='Fri'>Fri</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='Sat'>Sat</Checkbox>
                        </Col>
                        <Col span={3}>
                            <Checkbox value='Sun'>Sun</Checkbox>
                        </Col>
                    </Row>
                </Checkbox.Group>
           </div>
            <div>
                <TimePicker onChange={onChangeTime} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
            <div>
                <Link to="create_2">
                    <Button size='large' className='create-button'>Back</Button>
                </Link>
                <Button size='large' className='create-button'>Next</Button>
            </div>
        </div>
    );
}

export default CreatingHabbit_3;