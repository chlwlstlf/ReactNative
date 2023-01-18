import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function App() {
  const childern = new Array(100)
    .fill(null) //Array는 undefined로 되어있음, map을 사용하려면 null로 바꿔야함
    .map((notUsed, index)=><Text>Hello world! {index}</Text>)
  return (
    <SafeAreaView>{childern}</SafeAreaView>
  );
}

