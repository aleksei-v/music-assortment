import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/auth-selectors";


const PublicRoute = () => {
    const isUserLogin = useSelector(getIsLoggedIn);

    if (isUserLogin) {
        return <Navigate to="/contacts"/>
    }
    return <Outlet/>
}
 
export default PublicRoute;