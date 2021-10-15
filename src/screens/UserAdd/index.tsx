import React from 'react';

import {InputSelectDate, InputText} from '../../components/Forms';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import {useAppDispatch} from '../../hooks';
import {addUser} from '../../store/user';
import {moment} from '../../utils/moment';
import {Formik} from 'formik';
import * as Yup from 'yup';

import * as S from './styles';

interface FormProps {
  avatar: string;
  name: string;
  birthdate: string;
}

const schema = Yup.object().shape({
  avatar: Yup.string().required(),
  name: Yup.string().required(),
  birthdate: Yup.string().required(),
});

const UserAdd = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const submitForm = (values: FormProps) => {
    const formData = {
      ...values,
      birthdate: moment(values.birthdate).format('DD/MM/YYYY'),
      code: Math.floor(Math.random() * 100),
    };

    dispatch(addUser(formData));

    navigation.goBack();
  };

  return (
    <S.Container>
      <Formik
        initialValues={{avatar: '', name: '', birthdate: ''}}
        validationSchema={schema}
        onSubmit={submitForm}>
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          isValid,
        }) => (
          <S.Content>
            <S.Form>
              <S.AvatarWrapper
                activeOpacity={0.6}
                onPress={() => {
                  launchCamera(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                    },
                    data => {
                      setFieldValue('avatar', data.assets![0]?.uri);
                    },
                  );
                }}>
                <Avatar size={100} uri={values.avatar} />
                <S.AvatarOverlay />
                <S.Icon name="account-edit" />
              </S.AvatarWrapper>
              <S.FormGroup>
                <InputText
                  label="Nome"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  error={errors.name}
                />
              </S.FormGroup>
              <S.FormGroup>
                <InputSelectDate
                  label="Data de nascimento"
                  placeholder="Selecione"
                  date={values.birthdate!}
                  onChangeDate={date => {
                    setFieldValue('birthdate', date);
                  }}
                  error={errors.birthdate}
                />
              </S.FormGroup>
            </S.Form>
            <Button
              title="Salvar"
              activeOpacity={0.7}
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </S.Content>
        )}
      </Formik>
    </S.Container>
  );
};

export default UserAdd;
