import React from 'react';

import Avatar from '../../../../components/Avatar';

import * as S from './styles';

interface UserProps {
  code: number;
  avatar: string;
  name: string;
  birthdate: string;
}

interface ItemProps {
  user: UserProps;
  index: number;
  onDelete: (index: number) => void;
}

const UserItem = ({user, index, onDelete}: ItemProps) => (
  <S.Container>
    <Avatar uri={user.avatar} />
    <S.Content>
      <S.Wrapper>
        <S.Name>{user.name}</S.Name>
        <S.Description># {user.code}</S.Description>
        <S.Description>{user.birthdate}</S.Description>
      </S.Wrapper>
    </S.Content>
    <S.ButtonDelete onPress={() => onDelete(index)}>
      <S.Icon name="delete" />
    </S.ButtonDelete>
  </S.Container>
);

export default UserItem;
