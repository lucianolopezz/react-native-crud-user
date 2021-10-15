import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';

import UserList from '../screens/UserList';
import UserAdd from '../screens/UserAdd';

export type RootStackParamList = {
  UserList: undefined;
  UserAdd: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{title: 'Listagem de usuários'}}
        />
        <Stack.Screen
          name="UserAdd"
          component={UserAdd}
          options={{title: 'Cadastrar usuário'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
