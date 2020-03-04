import React from 'react';
import Icon from '@expo/vector-icons/Feather';

import Chat from '../../../components/Chat';

import { Container, Header, Title, AddButton, AddButtonIcon, ChatList } from './styles';

export default function SelectChat() {
  return (
    <Container>
      <Header>
        <Title>Mensagens</Title>
        <AddButton>
          <AddButtonIcon name="plus" size={30} />
        </AddButton>
      </Header>
      <ChatList>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ChatList>
    </Container>
  );
}

SelectChat.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="message-circle" size={20} color={tintColor} />
  )
};