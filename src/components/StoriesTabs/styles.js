import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialIcons';

export const Container = styled.View`
  align-self: stretch;
  width: 100%;
  margin: 10px 0 10px 10px;
  flex-direction: row;
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  background: #ECECEC;
  padding: 20px;
  border-radius: 40px;
  margin: 10px;
`;

export const AddButtonIcon = styled(Icon)`
  background: #ddd;
`;

export const StoryList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 5, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const Story = styled.TouchableOpacity`
  width: 65px;
  height: 90px;
  background: #ddd;
  border-radius: 15px;
  margin-right: 10px;
`;