import { FunctionComponent, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setLocation } from '../../redux-toolkit/store/store';

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