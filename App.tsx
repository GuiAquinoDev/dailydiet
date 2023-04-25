import { Text, View } from "react-native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
} from "@expo-google-fonts/nunito-sans";
import { Home } from "./src/screens/Home";

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_600SemiBold});

  return (
    <View>
      {fontsLoaded ? <Home/> : <View/>}
    </View>
  );
}
