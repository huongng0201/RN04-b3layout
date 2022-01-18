import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.greenBox}>
    <View style={styles.yellowBox}></View>
    <View style={styles.yellowBox}></View>
      </View>

    <View style={styles.purpleBox}>
    <View style={styles.blueBox}></View>
    <View style={styles.blueBox}></View>
    <View style={styles.blueBox}></View>
    <View style={styles.blueBox}></View>
    </View>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
 
  },
  greenBox:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#A1c99A',
    borderRadius: 25,
    marginBottom:10,
    justifyContent: 'space-around', 
    alignItems:'center'

  },
  yellowBox:{
    height: 100,
    width: 350,
    backgroundColor: '#ffffc2',
    justifyContent: 'center',
    borderRadius: 20
  },
  purpleBox:{
    flex: 1,
    backgroundColor: '#c8c8fA',
    borderRadius: 25,
    marginTop: 10,
    flexWrap:'wrap'

  },
  blueBox:{
   display:'flex',
    backgroundColor:'#4f82c0',
    height: 150,
    width: 150,
    borderRadius: 15,
    margin: 20,
    alignItems:'center',
    justifyContent:'center',

  }

})
