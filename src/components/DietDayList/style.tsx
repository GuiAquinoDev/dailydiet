import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: 32px;
`

export const Heading = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`