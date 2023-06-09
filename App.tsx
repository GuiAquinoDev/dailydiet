import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import theme from "./src/theme";
import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
