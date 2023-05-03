import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    margin-top: 8px;

    flex-direction: row;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
    padding: 14px 16px;
`

export const TimeItem = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Divider = styled.Text`
    margin: 0 12px;

    color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Title = styled.Text`
    flex: 1;

    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`
export const Status = styled.View`
    width: 14px;
    height: 14px;

    background: ${({ theme }) => theme.COLORS.RED_LIGHT};
    border-radius: 10px;
`