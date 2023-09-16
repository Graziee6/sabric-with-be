import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (toastMsg) => {
    toast(toastMsg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // 3 seconds
    });
  };