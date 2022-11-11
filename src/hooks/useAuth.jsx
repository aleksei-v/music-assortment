

import { useSelector } from 'react-redux';
import {
  getStatusLoading,
  getStatusError,
  getUsername,
  getStatusRefresh
} from 'redux/auth/auth-selectors';


export const useAuth = () => {
  const isLoading = useSelector(getStatusLoading);
  const isError = useSelector(getStatusError);
  const userName = useSelector(getUsername);
  const isRefresh = useSelector(getStatusRefresh);
  return {
    isLoading,
    isError,
    userName,
    isRefresh,
  };
};