import React from 'react';
import NumberFormat from 'react-number-format';

export default function Currency({ value }) {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      decimalSeparator=","
      thousandSeparator="."
      fixedDecimalScale
      allowNegative
      decimalScale={2}
      prefix="R$ "
      renderText={text => text}
    />
  );
}
