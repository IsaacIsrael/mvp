import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { persistor, store } from './store';
import NetInfo from '@react-native-community/netinfo';
import WifiAlert from './components/WifiAlert';
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isConnected, setIsConnect] = useState<boolean>(true);

  useEffect(()=>{
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnect(state.isConnected || false);
    });

    return ()=> unsubscribe();
  },[])

  if (!isLoadingComplete) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <SafeAreaProvider>
          {!isConnected && <WifiAlert />}
          <Navigation colorScheme="dark"/>
          <StatusBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
