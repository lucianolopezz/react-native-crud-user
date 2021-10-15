import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const List = styled.FlatList``;

export const ButtonAdd = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${normalize(50)}px;
  height: ${normalize(50)}px;
  border-radius: ${normalize(50 / 2)}px;
  background-color: ${({theme}) => theme.colors.primary};

  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${normalize(20)}px;
  color: #fff;
`;
