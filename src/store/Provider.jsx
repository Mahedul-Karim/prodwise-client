import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <Context value={{ user, setUser }}>{children}</Context>;
};

export const useProvider = () => {
  return useContext(Context);
};

export default Provider;
