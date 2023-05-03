import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    flex-direction: column;
    gap: 8px;
`

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`