import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNDatePicker from 'react-native-date-picker';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';
import RNModal from 'react-native-modal';

interface ButtonInputProps {
  error?: string;
}

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: ${normalize(16)}px;
  font-weight: 500;

  color: ${({theme}) => theme.colors.text};

  margin-bottom: 3px;
`;

export const ButtonInput = styled.TouchableOpacity<ButtonInputProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-width: 1px;
  border-color: ${({theme, error}) =>
    error ? theme.colors.danger : theme.colors.primary};
  border-radius: 10px;
  height: ${normalize(48)}px;

  padding: 10px;
`;

export const Value = styled.Text`
  font-size: ${normalize(14)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Placeholder = styled.Text`
  font-size: ${normalize(14)}px;
  color: ${({theme}) => theme.colors.tertiary};
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${normalize(20)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const Modal = styled(RNModal as any)`
  flex: 1;
  justify-content: flex-end;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const ModalContent = styled.View`
  width: ${({theme}) => theme.metrics.screenWidth}px;
  height: ${({theme}) => theme.metrics.screenHeight / 2}px;
  background-color: #fff;

  margin-left: -20px;
  margin-bottom: -20px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`;

export const ButtonSubmit = styled.TouchableOpacity``;

export const ButtonSubmitText = styled.Text`
  font-size: ${normalize(16)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const DatePicker = styled(RNDatePicker)`
  width: ${({theme}) => theme.metrics.screenWidth}px;
`;
