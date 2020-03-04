import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@expo/vector-icons/Feather';
import profile from '../../../assets/profile.png';

import { Container, Header, Info, User, Avatar, Hello, Name, NewPostButton, NewPostIcon, SearchInput, Title } from './styles';
import StoriesTabs from '../../components/StoriesTabs';
import Feed from '../../components/Feed';

function Dashboard() {

  return (
    <Container>
      <Header>
        <Info>
          <Avatar source={profile} />
          <User>
            <Hello>Olá</Hello>
            <Name>Thiago Bruno</Name>
          </User>
        </Info>
        <NewPostButton>
          <NewPostIcon name="edit" color="#000000" size={30} />
        </NewPostButton>
      </Header>
      <SearchInput placeholder="Pesquise pessoas e hash tags" icon="search" />

      <StoriesTabs />

      <Title>Feed</Title>

      <Feed />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  tintColor: PropTypes.string,
};

Dashboard.defaultProps = {
  tintColor: null,
};

export default Dashboard
