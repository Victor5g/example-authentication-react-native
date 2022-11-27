import { StyleSheet, Text, View, Button } from 'react-native';

import { useAuth } from '../../contexts/AuthProvider';

export default function Home() {
  const {user, signOut } = useAuth()

  const handleSignOut = async() => {
    signOut()
  }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text> Bem-Vindo {user?.name}</Text>
      <Button title="SignOut" onPress={handleSignOut}/>
    </View>
  );
}


