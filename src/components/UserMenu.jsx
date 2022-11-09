import { getUsername } from "redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { Box } from "./Box";
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

export const UserMenu = () => {
    const dispatch = useDispatch()
    const userName = useSelector(getUsername);
    const signOut = () => dispatch(logOut())
    return (
        <>
            <Box>
                <Typography variant="caption">Welcome, {userName}</Typography>
                <IconButton onClick={signOut}>
                    <LogoutIcon  />
                </IconButton>
            </Box>
        </>
    )
};