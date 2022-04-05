import axios from 'axios';
import React, { useEffect } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
const Dashboard = () => {
    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('/user');
            }
        )()
    }, [])

    return (
        <Wrapper>
            <div>Home: Dashboard</div>
        </Wrapper>
    )
}

export default Dashboard