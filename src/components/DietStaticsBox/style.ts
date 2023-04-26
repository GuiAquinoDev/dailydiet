import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type InfoBoxStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
    type?: InfoBoxStyleProps
}

export const Container = styled.View`
    width:100%;
    height: 102px;
 
    background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    padding: 20px 16px;
    margin: 32px 0 40px 0;
`

export const ButtonIcon = styled(TouchableOpacity)`
    position: absolute;
    right: 8px;
    top: 8px;
    align-items: flex-end;
`

export const InfoIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))``


