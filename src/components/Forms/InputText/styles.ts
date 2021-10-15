import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import {TextInput} from 'react-native';

interface InputProps {
  error?: string;
}

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: ${normalize(16)}px;
  font-weight: 500;

  color: ${({theme}) => theme.colors.text};

  margin-bottom: 3px;
`;

export const Input = styled(TextInput)<InputProps>`
  border-width: 1px;
  border-color: ${({theme, error}) =>
    error ? theme.colors.danger : theme.colors.primary};
  border-radius: 10px;

  padding-bottom: 10px;
  padding-left: 10px;

  height: ${normalize(48)}px;
  font-size: ${normalize(14)}px;
  color: ${({theme}) => theme.colors.text};
`;
