import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from "pages/HomePage";
import { RegisterForm } from "pages/RegisterForm";
import { Layout } from './Layout/Layout';
import { LoginForm } from "pages/LoginForm";
import { Contacts } from 'pages/Contacts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const UserRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<PublicRoute />}>
          
                    <Route index element={<Navigate to='home' />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<Contacts />} />
                </Route>

                <Route path="*" element={<p>Page not found</p>} />
            </Route>
        </Routes>
    )
};



export default UserRoutes