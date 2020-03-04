import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialIcons";

export const Container = styled.View`
  align-self: stretch;
  padding: 10px;
`;

export const PostList = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 10, paddingTop: 10 },
  showsVerticalScrollIndicator: false
})``;

export const Post = styled.View`
  margin-bottom: 10px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 9px;
  margin-right: 10px;
`;

export const Info = styled.View``;

export const Name = styled.Text`
  color: #303030;
  font-size: 16px;
  font-weight: bold;
`;

export const PostDate = styled.Text`
  color: #8b96a3;
  font-size: 14px;
`;

export const PostMenu = styled.TouchableOpacity`
  padding: 10px;
`;

export const PostMenuIcon = styled(Icon)``;

export const PostContent = styled.View`
  flex: 1;
  align-items: center;
`;

export const PostImage = styled.Image`
  width: 100%;
`;
