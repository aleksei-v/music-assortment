import { getUsername } from "redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";

export const UserMenu = () => {
    const dispatch = useDispatch()
    const userName = useSelector(getUsername);
    const signOut = () => dispatch(logOut())
    return (
        <>
            <b>Welcome, {userName}</b>
            <button onClick={signOut}>Sign out</button>
        </>
    )
};