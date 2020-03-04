import React from 'react';

import profile from '../../../assets/profile.png';

import {
  Container,
  Title,
  PostHeader,
  PostList,
  Post,
  User,
  Avatar,
  Info,
  Name,
  PostDate,
  PostMenu,
  PostMenuIcon,
  PostContent,
  PostImage
} from './styles';

export default function Feed() {
  return (
    <Container>
      <PostList>
        <Post>
          <PostHeader>
            <User>
              <Avatar source={profile} />
              <Info>
                <Name>Thiago Bruno</Name>
                <PostDate>há 20 min atrás</PostDate>
              </Info>
            </User>
            <PostMenu>
              <PostMenuIcon name="keyboard-arrow-down" size={30} />
            </PostMenu>
          </PostHeader>
          <PostContent>
            <PostImage source={profile} />
          </PostContent>
        </Post>
      </PostList>
    </Container>
  );
}
