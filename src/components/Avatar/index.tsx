import React from 'react';

import * as S from './styles';

interface AvatarProps {
  uri?: string;
  size?: number;
}

const Avatar = ({uri, size = 60}: AvatarProps) =>
  uri ? (
    <S.Container resizeMode="cover" source={{uri}} size={size} />
  ) : (
    <S.Overlay size={size} />
  );

export default Avatar;
