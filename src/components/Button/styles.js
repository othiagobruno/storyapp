import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '~/constants/Colors';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${Colors.primary};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 16px;
`;
