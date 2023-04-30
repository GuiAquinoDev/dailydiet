import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { DietIcon } from '../Icon/index'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  background: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(DietIcon).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 18,
}))``