import {TouchableOpacityProps, TextProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import normalize from 'react-native-normalize';

interface TouchableProps extends TouchableOpacityProps {
  appearance: 'filled' | 'outline';
}

interface TitleProps extends TextProps {
  appearance: 'filled' | 'outline';
  disabled?: boolean;
}

const ButtonOutline = css`
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.primary};
`;

const ButtonDisabled = css`
  background-color: ${({theme}) => theme.colors.secondary};
`;

const TitleOutline = css`
  color: ${({theme}) => theme.colors.primary};
`;

export const Container = styled.TouchableOpacity<TouchableProps>`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${normalize(48)}px;
  border-radius: 10px;

  background-color: ${({theme}) => theme.colors.primary};

  ${({appearance}) => appearance === 'outline' && ButtonOutline};
  ${({disabled}) => disabled && ButtonDisabled};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({disabled}) => (disabled ? '#A2A2A2' : '#fff')};

  font-weight: 500;
  font-size: ${normalize(16)}px;
  text-transform: uppercase;

  ${({appearance}) => appearance === 'outline' && TitleOutline};
`;

export const Loading = styled.ActivityIndicator``;
