import Axios from '../../utility/api'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const HandleLogout = async () => {
        try {
            const response = await Axios.post('api-v1/auth/user-logout/');
            if (response.status === 200) {
                console.log(response);
                toast.success(response.data.message);
                navigate('/', {
                    state: { showToast: true, toastMessage: response.data.message },
                });
            }
        } catch (error) {
            console.error(error.response.data[0]);
            toast.error(error.response.data[0]);
        }
    }

    return ( 
        <header class="header">
            <h1>Welcome to My Website</h1>
            <button className='btn btn-primary' onClick={HandleLogout}>Logout</button>
            <ToastContainer />
        </header>
    );
};
    
export default Header;