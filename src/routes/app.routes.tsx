import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home'

const { Navigator, Screen }= createNativeStackNavigator()

export const AppRoutes = () =>{
  return(
    <Navigator>
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}