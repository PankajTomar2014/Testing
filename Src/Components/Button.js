import React from 'react';
import {StyleSheet,Image, TextInput,View, Text, TouchableOpacity} from 'react-native';

export const CustomeButton = props => {
  const {btnText, onPress,style} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchStyle,style]}>
      <Text style={styles.touchText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export const Input = props => {
  const { isPassword } = props
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} {...props} />
      {isPassword && <HidePassword {...props}/>}
    </View>
  );
};

export const HidePassword = props => {
  const { onPress ,isHide } = props;
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.hideContainer}>
        <Image
          style={{height:30,width:30}}
          resizeMode={'contain'}
          source={
            isHide ? {uri: 'https://cdn-icons-png.flaticon.com/128/2710/2710718.png'}
            : {uri:'https://cdn-icons-png.flaticon.com/128/11502/11502541.png'}
          }
        />
    </TouchableOpacity>
  );
};


export const TitleText = (props) =>{
  const { msg } = props
  return (
    <View style={{marginVertical:10,alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:20,color:"green",fontWeight:"bold"}}>{msg}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  touchStyle: {
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '85%',
    backgroundColor: '#0841A0',
  },
  touchText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  inputContainer:{
    flexDirection:'row',    
    borderWidth:1,
    borderRadius:5,
    marginVertical:5,
    alignItems:"center",
    height: 50,
    width: '85%',
    alignSelf:"center",
    justifyContent:"space-between"
  },
  input: {
    paddingLeft: 20,
  },
  hideContainer:{   
    alignSelf:"flex-end",
    height:'100%',
    justifyContent:"center",
    alignItems:"center",
    width:'20%'
  }
});
