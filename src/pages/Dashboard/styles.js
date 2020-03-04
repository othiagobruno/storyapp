import styled from 'styled-components/native';
import Input from '../../components/Input';
import Icon from '@expo/vector-icons/FontAwesome5';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { alignItems: 'center', paddingBottom: 50 },
})`
  flex: 1;
`;


export const Title = styled.Text`
  align-self: stretch;
  font-size: 30px;
  font-weight: bold;
  padding-left: 15px;
`;

export const Header = styled.View`
  align-self: stretch;
  padding: 50px 20px 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const User = styled.View`
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 9px;
  margin: 0 5px 0 0;
`;

export const Hello = styled.Text`
  font-size: 14px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const NewPostButton = styled.TouchableOpacity`
  border-radius: 4px;
`;

export const NewPostIcon = styled(Icon)`
  width: 40px;
  height: 40px;
`;

export const SearchInput = styled(Input)`
  margin: 20px;
`;
