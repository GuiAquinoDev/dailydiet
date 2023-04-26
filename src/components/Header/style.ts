
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`
export const User = styled.Image`
    width: 40px;
    height: 40px;
`