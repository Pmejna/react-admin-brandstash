import { FunctionComponent, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../app/store';

const Dashboard: FunctionComponent = () => {
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