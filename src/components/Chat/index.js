import React from 'react';

import profile from '../../../assets/profile.png';

import { Container, Info, Avatar, User, Name, Resume, Time } from './styles';

export default function Chat() {
  return (
    <Container>
      <Info>
        <Avatar source={profile} />
        <User>
          <Name>Thiago Bruno</Name>
          <Resume>você pode vir aqui amanhã?</Resume>
        </User>
      </Info>
      <Time>12:45</Time>
    </Container>
  );
}
