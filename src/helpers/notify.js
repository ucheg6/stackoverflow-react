import { toast, Slide } from 'react-toastify';

const notify = {
  success: (message) => {
    toast.success(message, {
      hideProgressBar: true,
      transition: Slide,
      autoClose: 2000,
    });
  },
  error: (message) => {
    message = message === 'Your Token is invalid' ? 'You need to login first' : message;

    toast.error(message, {
      hideProgressBar: false,
      transition: Slide,
      autoClose: 2000,
    });
  },
};

export default notify;