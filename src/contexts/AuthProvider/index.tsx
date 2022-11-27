import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as authenticate from "../../service/auth";
import { AuthContextData, User } from "./types";

import { api } from "../../service/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const storgaUser = await AsyncStorage.getItem("@RNName:user");
        const storageToken = await AsyncStorage.getItem("@RNName:token");
        if (storgaUser && storageToken) {
          credentialKey(storageToken);
          setUser(JSON.parse(storgaUser));
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    loadCredentials();
  }, []);

  const signIn = async () => {
    try {
      let response = await authenticate.signIn();
      setUser(response.user);
      credentialKey(response.token);
      await AsyncStorage.setItem("@RNName:user", JSON.stringify(response.user));
      await AsyncStorage.setItem("@RNName:token", JSON.stringify(response.token));
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const credentialKey = (key: String) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${key}`;
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      delete api.defaults.headers.common['Authorization'];
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
