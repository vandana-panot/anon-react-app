
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
interface UserData {
  id: "string";
}
interface AuthContextInterface {
  user: UserData | null;
  token: any;
  name: string;
}
const defaultValue = {};

const AuthContext = createContext<AuthContextInterface>(
  defaultValue as AuthContextInterface
);

interface Props {
  children?: ReactNode;
  newToken?: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [token, setToken_] = useState<any | null>(
    localStorage.getItem("token")
  );

  const setToken = ({ newToken }: Props) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo<any | null>(
    () => ({
      token,
      setToken,
      name: "ss",
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

// mar 25 26 AT-19238 : Addressd suggested spec fixes
// mar 27 28 TOOL-27: Switch Component suggested changes
// april 1 2 AT-20544 : Allow Party Name to be Modified
// april 3 4 AT-20544 : Allow Party Name to be Modified
