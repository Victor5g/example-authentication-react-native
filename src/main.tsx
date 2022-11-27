import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../src/contexts/AuthProvider";
import { Routes } from "../src/routes/routes";

export default function Main() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}