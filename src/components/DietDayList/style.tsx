import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: 8px;
`

export const Heading = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-top: 24px;
`