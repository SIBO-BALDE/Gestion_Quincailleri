import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface NotificationProps {
    message: string;
  }

export default function NotificationFailed({ message }: NotificationProps) {
    const showErrorToast = () => {
        toast.error(message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      };
    
  return (
    <div> 
        {/* <button onClick={showErrorToast}>Show Error Toast</button> */}
        <ToastContainer />
    </div>
  )
}
