import { Box } from "components/Box"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";

export const RegisterForm = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: { name, value }}) => {
        // const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({name, email, password}))
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }
    return (
        <Box>
            <h1>Regisration</h1>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Your name
                    <input type="text" name="name" value={name} onChange={handleChange}/>
                </label>
                <label>
                    Your email     
                 <input type="email" name="email" value={email} onChange={handleChange}/>   
                </label>
                <label>
                    Your password   
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                </label>
                <button type="submit">Register</button>

            </form>

        </Box>
    )
}