import { View, Button } from "react-native";

import { useAuth } from "../../contexts/AuthProvider";

export default function SignIn() {

  const { signIn } = useAuth()

  const handleSignIn = async() => {
    await signIn()
  }

  return (
    <View style={{flex:1, justifyContent:'center'}} >
      <Button title="SignIn" onPress={handleSignIn}/>
    </View>
  );
}
