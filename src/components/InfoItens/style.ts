import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type InfoBoxStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
    type?: InfoBoxStyleProps
}

export const Container = styled.View`
    width:100%;
    height: 104px;
    
    align-items: center;
    justify-content: center;    

    background: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    margin: 32px 0 42px 0;
`

export const ButtonIcon = styled(TouchableOpacity)`
    flex:1;
`
export const InfoIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))``

export const StaticInfo = styled.Text``

export const TextInfo = styled.Text`
    color: black
`