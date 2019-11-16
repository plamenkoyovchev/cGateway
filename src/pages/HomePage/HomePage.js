import React, { useEffect, useState } from 'react';

import './HomePage.scss';
import axios from '../../http/axiosGateway';

const HomePage = () => {
    const [gatewayInfo, setGatewayInfo] = useState({
        "api": "0.1",
        "sw": "0.1.1",
        "hw": "2",
        "product": "9020.001.002",
        "sn": "19100018"
    });

    useEffect(() => {
        axios.get('/info')
            .then(response => setGatewayInfo({ ...response.data }))
            .catch(err => { });
    }, []);

    return (
        <div className='HomePage'>
            <h1>
                Lisa Gateway Simulator Client
            </h1>
            {Object.keys(gatewayInfo).map((key, i) => <p className='info' key={i}>{`${key.toUpperCase()}: ${gatewayInfo[key]}`}</p>)}
        </div>
    );
}

export default HomePage;