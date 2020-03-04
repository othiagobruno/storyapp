import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  padding: 50px 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #232323;
  align-items: center;
`;

export const AddButton = styled(RectButton)`

`;

export const AddButtonIcon = styled(Icon)`
  
`;

export const ChatList = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 5, paddingRight: 20, paddingTop: 30 },
  showsVerticalScrollIndicator: false,
})``;
