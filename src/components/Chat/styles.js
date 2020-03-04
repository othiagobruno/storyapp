import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 5px 0;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

export const User = styled.View`
  
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #303030;
`;

export const Resume = styled.Text`
  font-size: 14px;
  color: #737373;
`;

export const Time = styled.Text`
  font-size: 13px;
`;