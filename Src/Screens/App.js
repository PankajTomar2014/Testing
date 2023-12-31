import React, { useState } from 'react';

import {StyleSheet, SafeAreaView, ImageBackground, } from 'react-native';
import { CustomeButton, Input, TitleText } from '../Components/Button';

const App = (props) => {
  console.log('props:=======>', props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide,setIsHide] = useState(false)

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields..');
      return;
    }
    console.log('Email:=======>', email);
    console.log('Password:=====>', password);
  };

  return (
    <SafeAreaView style={{flex: 1, }}>
      <ImageBackground
        style={styles.container}
        source={require('../Assets/Images/backImage.jpg')}
      >

        <TitleText msg={'Login Screen'}/>
        <Input
          placeholder={"Email"}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder={"Password"}
          value={password}
          onChangeText={text => setPassword(text)} 
          isPassword={true} 
          isHide={isHide}   
          onPress={()=> setIsHide(!isHide)}  
        />
        <CustomeButton 
          btnText={"Submit"}
          style={{marginTop:20}}
          onPress={()=> props.navigation.navigate('Home')}
          // onPress={handleLogin}

        />      
      </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"center",
  },
});

export default App;