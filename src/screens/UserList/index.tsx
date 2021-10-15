import React, {useCallback} from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import {Alert, ListRenderItemInfo} from 'react-native';
import {deleteUser} from '../../store/user';
import UserItem from './components/UserItem';

import * as S from './styles';

interface UserProps {
  code: number;
  avatar: string;
  name: string;
  birthdate: string;
}

type CreateUserListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserList'
>;

const UserList = () => {
  const navigation = useNavigation<CreateUserListNavigationProp>();
  const users = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const handleNavigateToUserAdd = () => {
    navigation.navigate('UserAdd');
  };

  const handleDelete = (index: number) => {
    Alert.alert('Deseja realmente deletar este usuário?', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(deleteUser(index))},
    ]);
  };

  const _renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<UserProps | any>) => (
      <UserItem user={item} index={index} onDelete={handleDelete} />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <S.Container>
      <S.List
        data={users.list}
        keyExtractor={(_, index) => String(index)}
        renderItem={_renderItem}
      />

      <S.ButtonAdd onPress={handleNavigateToUserAdd} activeOpacity={0.8}>
        <S.Icon name="account-plus" />
      </S.ButtonAdd>
    </S.Container>
  );
};

export default UserList;
