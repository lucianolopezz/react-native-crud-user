import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import normalize from 'react-native-normalize';

const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-weight: 500;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.Image`
  width: ${normalize(60)}px;
  height: ${normalize(60)}px;
  border-radius: ${normalize(60 / 2)}px;
  background-color: ${({theme}) => theme.colors.tertiary};
`;

export const Wrapper = styled.View``;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`;

export const Name = styled(Text)`
  font-size: 18px;
`;

export const Description = styled(Text)`
  font-size: 14px;
  color: ${({theme}) => theme.colors.tertiary};
`;

export const ButtonDelete = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${normalize(50)}px;
  height: ${normalize(50)}px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${normalize(25)}px;
  color: ${({theme}) => theme.colors.tertiary};
`;
