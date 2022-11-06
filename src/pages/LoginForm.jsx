import { Box } from "components/Box"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";


export const LoginForm = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: { name, value }}) => {
        // const { name, value } = e.target;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({email, password}))
        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
  return (
        <Box>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Your email     
                 <input type="email" name="email" value={email} onChange={handleChange}/>   
                </label>
                <label>
                    Your password   
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                </label>
                <button type="submit">Log in</button>

            </form>

        </Box>
    )
}