import styled from 'styled-components/native';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  padding: 0 10px;
  height: 46px;
  background: ${Colors.inputBackground};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #828282;
`;
