import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/auth-selectors";


const PrivateRoute = () => {
    const isUserLogin = useSelector(getIsLoggedIn);

    if (!isUserLogin) {
        
        return <Navigate to="/login" />
    }
    return <Outlet/>
}
 
export default PrivateRoute;