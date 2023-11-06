import React from 'react';
import { Text, View } from 'react-native';
import { CustomeButton } from '../Components/Button';

const Home = (props) => (

    <View style={{
        flex:1,
        justifyContent:"center",alignItems:"center"}}>
        <CustomeButton
            btnText={'Go to Details Screen'}
            onPress={()=> props.navigation.navigate('Details')}        
        />
        <CustomeButton
            btnText={'Go to Home Screen'}
            onPress={()=> props.navigation.navigate('Home')}        
        />
        <CustomeButton
            btnText={'Go to Setting Screen'}
            onPress={()=> props.navigation.navigate('Setting')}        
        />
    </View>
);

export default Home;
