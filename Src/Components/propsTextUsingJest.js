import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TitleText extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <View style={{marginVertical:10,alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:20,color:"green",fontWeight:"bold"}}>{this.props.msg}</Text>
        </View>
    );
  }
}
