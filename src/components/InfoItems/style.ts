import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type InfoBoxStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
    type?: InfoBoxStyleProps
}

export const Container = styled.View`
    width: 100%;
    
    align-items: center;
    justify-content: center;    
`

export const StaticInfo = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    line-height: 41.6px;
`

export const TextInfo = styled.Text`
    color: black;
`

export const InfoIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))``

