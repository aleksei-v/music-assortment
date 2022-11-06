import { NavLink } from "react-router-dom";
import { Box } from "components/Box";
import { Outlet } from "react-router-dom";

export const Layout = () => (
    <Box>
        <header>
            <nav>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='register'>Sign up</NavLink>
                <NavLink to='login'>Log in</NavLink>
            </nav>
        </header>

    <Outlet/>

    </Box>
);

