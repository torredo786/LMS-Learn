import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerService, loginService, chcekAuthService, getCardDataService } from "@/services";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';


export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });
  const [loading, setLoading] = useState(true);

  async function handleRegisterUser(event) {
    event.preventDefault();
    const data = await registerService(signUpFormData);
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    const data = await loginService(signInFormData);
    if (data.success) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    } else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  }

  async function checkAuthUser() {
    try {
      const data = await chcekAuthService();    
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log("error:", error);
      if (!error?.response?.data?.success) {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    }
  }
  async function getCardData() {
    const data = await getCardDataService();
    return data;
  }
  function showNotification({ message, type }) {
    switch (type) {
      case "success":
        toast.success(message, {
          autoClose: 2400,
        });
        break;
      case "warning":
        toast.warning(message, {
          autoClose: 2400,
        });
        break;
      case "info":
        toast.info(message, {
          autoClose: 2400,
        });
        break;
      case "error":
        toast.error(message, {
          autoClose: 2400,
        });
      // default:
      //   toast.success(message);
    }
  }
  //chcek auth user
  useEffect(() => {
    checkAuthUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        getCardData,
        showNotification,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
