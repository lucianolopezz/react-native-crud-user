import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.ScrollView.attrs(() => {
  return {
    contentContainerStyle: {
      flex: 1,
      flexGrow: 1,
      justifyContent: 'space-between',
      padding: 20,
    },
  };
})``;

export const Form = styled.View``;

export const AvatarWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;

  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
`;

export const AvatarOverlay = styled.View`
  position: absolute;
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
  border-radius: ${normalize(100 / 2)}px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Icon = styled(MaterialCommunityIcons)`
  position: absolute;
  font-size: ${normalize(30)}px;
  color: #fff;
`;

export const FormGroup = styled.View`
  margin-bottom: 10px;
`;
