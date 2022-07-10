import { useEffect} from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setLocation } from '../../app/store';

const Dashboard: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLocation('Dashboard'));
    });
    return ( 
        <>
            Dashboard
        </>
     );
}
 
export default Dashboard;