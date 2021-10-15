import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserProps {
  code?: number;
  avatar: string;
  name: string;
  birthdate: string;
}

const initialState = {
  list: [
    {
      code: Math.floor(Math.random() * 100),
      name: 'User 1',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR7AsoB9DVZeo4gQR67Amv-iVp6jgx05Rlg&usqp=CAU',
      birthdate: '03/06/1994',
    },
    {
      code: Math.floor(Math.random() * 100),
      name: 'User 2',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR7AsoB9DVZeo4gQR67Amv-iVp6jgx05Rlg&usqp=CAU',
      birthdate: '03/06/1994',
    },
    {
      code: Math.floor(Math.random() * 100),
      name: 'User 3',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR7AsoB9DVZeo4gQR67Amv-iVp6jgx05Rlg&usqp=CAU',
      birthdate: '03/06/1994',
    },
  ] as UserProps[],
};

const error = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserProps>) => {
      state.list.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const {addUser, deleteUser} = error.actions;
export default error.reducer;
