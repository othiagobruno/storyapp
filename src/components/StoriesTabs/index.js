import React from 'react';

import { Container, AddButton, AddButtonIcon, StoryList, Story } from './styles';

export default function StoriesTabs() {
  return (
    <Container>
      <AddButton>
        <AddButtonIcon name="photo-camera" size={30} />
      </AddButton>
      <StoryList>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </StoryList>
    </Container>
  );
}
