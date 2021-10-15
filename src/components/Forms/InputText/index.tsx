import React, {memo} from 'react';

import {TextInputProps} from 'react-native';

import {useTheme} from 'styled-components';

import * as S from './styles';

interface InputTextProps extends TextInputProps {
  label?: string;
  error?: string;
}

const InputText = ({label, error, ...props}: InputTextProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        placeholderTextColor={theme.colors.text}
        underlineColorAndroid="transparent"
        error={error}
        {...props}
      />
    </S.Container>
  );
};

export default memo(InputText);
