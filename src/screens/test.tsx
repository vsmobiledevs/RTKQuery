import {View, Text, Button} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {login, logout} from '../redux/features/authSlice';
import {useGetAllPostsQuery} from '../redux/api/authApi';

type TestScreen = {
  loading: boolean;
};

const TestScreen: FC<TestScreen> = ({loading}) => {
  const dispatch = useAppDispatch();
  const {user, posts} = useAppSelector(state => state.authSlice);
  // const data = useAppSelector(state => state.postApi);

  const {isLoading, isError, error, data} = useGetAllPostsQuery({
    page: 1,
    token: user?.token,
  });
  // console.log('Posts: =>  ', posts);
  useEffect(() => {
    if (isError) {
      console.log('error: =>', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <View>
      <Text>App</Text>
      <Button
        title="Login"
        onPress={() =>
          dispatch(
            login({
              _id: '1',
              name: 'Muhammad Haris',
              email: 'haris@gmail.com',
              active: true,
              verified: true,
              token:
                'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2Nzc0ODUxMDB9.7V_PuPiwSYfGaJ8mrfD_hi2EYpW15kKTzbGgl-YKJaw',
            }),
          )
        }
      />
      <Button title="LogOut" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default TestScreen;
