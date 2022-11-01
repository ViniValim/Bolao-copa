import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Center} from 'react-native';
import { NativeBaseProvider, VStack } from "native-base";
import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/Signin";


export default function App() {
  const [fontsLoaded] = useFonts ({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

  return (
  <NativeBaseProvider theme={THEME}>
      {
        fontsLoaded ? <SignIn /> : <Loading />
      }
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
