import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";

const { Navigator, Screen }= createNativeStackNavigator()

export const AuthRoutes = () =>{
  return(
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  )
}