
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../contexts/AuthProvider";

export const Routes = () => {
  const { signed, loading } = useAuth();

  return loading ? <></> : signed ? <AppRoutes/> : <AuthRoutes/>;
};
