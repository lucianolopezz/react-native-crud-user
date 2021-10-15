import normalize from 'react-native-normalize';
import styled from 'styled-components/native';

interface AvatarProps {
  size: number;
}

export const Container = styled.Image<AvatarProps>`
  width: ${({size}) => normalize(size)}px;
  height: ${({size}) => normalize(size)}px;
  border-radius: ${({size}) => normalize(size / 2)}px;
  background-color: ${({theme}) => theme.colors.tertiary};
`;

export const Overlay = styled.View<AvatarProps>`
  width: ${({size}) => normalize(size)}px;
  height: ${({size}) => normalize(size)}px;
  border-radius: ${({size}) => normalize(size / 2)}px;
  background-color: ${({theme}) => theme.colors.tertiary};
`;
