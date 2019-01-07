/**
 * Function to clear user credentials
 */
export const clearCredentials = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
  };