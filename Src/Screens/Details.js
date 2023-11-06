import React from 'react';
import { Text, View } from 'react-native';
import { CustomeButton } from '../Components/Button';

const Details = (props) => (

    <View style={{
        flex:1,
        justifyContent:"center",alignItems:"center"}}>
        <CustomeButton
            btnText={'Go to Home Screen'}
            onPress={()=> props.navigation.navigate('Home')}        
        />
    </View>
);

export default Details;
