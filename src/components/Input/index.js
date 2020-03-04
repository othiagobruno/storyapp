import React, { forwardRef } from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';


import { Container, TInput } from './styles';
import Colors from '../../constants/Colors';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color={Colors.light} />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
