import React, { useState } from 'react';
import { CustomeButton, Input } from './Src/Components/Button';
import {StyleSheet, SafeAreaView, ImageBackground, } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide,setIsHide] = useState(false)

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={{flex: 1, }}>
      <ImageBackground
        style={styles.container}
        source={require('./Src/Assets/Images/backImage.jpg')}
      >
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
          onPress={handleLogin}

        />
      </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"center",
    padding:15
  },
});

export default App;