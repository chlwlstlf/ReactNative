import React from 'react';
import {SafeAreaView,Text,} from 'react-native';
import { StyleSheet } from 'react-native';
import {MD2Colors} from 'react-native-paper'
import Color from 'color'

export default function App() {
  //view가 들어간 컴포넌트는 배경색 지정 가능
  //Text는 글자색만 지정 가능
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>
        Hello StyleSheet world!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: MD2Colors.blue500}, 
  text: {fontSize: 20, color: Color(MD2Colors.blue500).alpha(0.7).lighten(0.9).string()}
})
