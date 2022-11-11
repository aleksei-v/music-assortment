import { Box } from "components/Box";
import { Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu";
import { NavItem } from "../AuthNav/AuthNav.styled";

export const Layout = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return(
    <Box>
            <Box as='header'
                display='flex'
                alingItems="center"
                justifyContent='space-around'
                borderBottom = '1px solid black'
            >
            <Box as="nav" display="flex" gridGap={3}>
                {!isLoggedIn && <NavItem to='home'>Home</NavItem>}
                <NavItem to='contacts'>Your contacts</NavItem>
            </Box>
            {isLoggedIn
                ?   <UserMenu/>
                :   <AuthNav/>
                }
        </Box>
        <Outlet/>
        </Box>
        
    );
}