import { NavItem } from "components/AuthNav/AuthNav.styled";
import { Box } from "components/Box";

export const HomePage = () => {
  return (
    <Box p={7} display="flex" flexDirection='column' alignItems='center'> 
      <Box as="p" fontSize="l" textAlign='center'>
        Welcome, here you can create own account with contact book. Also you will be able to remove any contact.
        If your phonebook is huge, you can search by name. Good luck!
      </Box>
      <Box p={5} fontSize="l" >
        <NavItem to="/register">Create an account</NavItem>
        </Box>
    </Box>
  );
}

