import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShowNotification({message, type} ) {
  console.log(message,type, "message,type");
    const showToast = (message, type = 'success', position = 'top-right') => {
        toast[type](message, {
          position: position,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
    
      return showToast;
    };

export default ShowNotification;
