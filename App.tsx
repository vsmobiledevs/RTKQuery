import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import TestScreen from './src/screens/test';

type IAppStates = {
  isLoading: boolean;
};

const App: FC<IAppStates> = ({isLoading}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TestScreen loading={false} />
      </PersistGate>
    </Provider>
  );
};

export default App;
