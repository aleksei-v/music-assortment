import { NavLink } from "react-router-dom";
import { Box } from "components/Box";
import { Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { AuthNav } from "components/AuthNav";
import { UserMenu } from "components/UserMenu";

export const Layout = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return(
    <Box>
            <Box as='header'
                display='flex'
                alingItems="center"
                justifyContent='space-around'
                borderBottom = '1px solid blue'
            >
            <nav>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='contacts'>Your contacts</NavLink>
            </nav>
            {isLoggedIn
                ?   <UserMenu/>
                :   <AuthNav/>
                }
        </Box>
        <Outlet/>
        </Box>
        
    );
}