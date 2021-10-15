import React from 'react';

import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Loading, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  appearance?: 'filled' | 'outline';
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  title,
  appearance = 'filled',
  disabled,
  loading,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <Container disabled={loading || disabled} appearance={appearance} {...rest}>
      {loading ? (
        <Loading
          color={
            appearance === 'outline' || loading ? theme.colors.primary : '#fff'
          }
        />
      ) : (
        <Title disabled={disabled} appearance={appearance}>
          {title}
        </Title>
      )}
    </Container>
  );
};

export default Button;
