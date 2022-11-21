import React, { useEffect } from 'react';
import GlobalState from './src/GlobalState/GlobalState';
import Router from './src/navigation/Router';
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native';

const App = () => {

  useEffect(() => {
    
    if(Platform.OS === 'android') {
      SplashScreen.hide();
    } else {
      console.log('ios')
    }
},[])
  
  return (
    <GlobalState>
      <Router/>
      </GlobalState>
  );
};


export default App;
