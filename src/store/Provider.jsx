import { auth } from "@/config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const themeType = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(themeType);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [queryToEdit, setQueryToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser?.providerData?.[0]);

      if (currentUser) {
        const idToken = await currentUser.getIdToken(true);

        setToken(idToken);
      } else {
        setToken(null);
      }
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  return (
    <Context
      value={{
        user,
        setUser,
        isLoading,
        token,
        queryToEdit,
        setQueryToEdit,
        setTheme,
        theme,
      }}
    >
      {children}
    </Context>
  );
};

export const useProvider = () => {
  return useContext(Context);
};

export default Provider;
