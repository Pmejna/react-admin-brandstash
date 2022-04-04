import axios from 'axios';
import React, { useEffect } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
const Dashboard = () => {
    useEffect(() => {
        const url: string = process.env.REACT_APP_API_URL ?? 'error';
        (
            async () => {
                const {data} = await axios.get(url+'/user', {withCredentials: true});
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