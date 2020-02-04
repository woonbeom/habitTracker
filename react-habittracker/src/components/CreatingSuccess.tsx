
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography } from 'antd';
import 'antd/dist/antd.css'

const { Text } = Typography;

function CreatingSuccess () {
    const [redirect, setRedirect] = useState(false);

    if (!redirect)
        setTimeout((()=>{setRedirect(true)}), 2000);
    else
        return <Redirect push to="/" />

    return (
        <div>
            <Text strong>Success</Text>
        </div>
    );
}

export default CreatingSuccess;