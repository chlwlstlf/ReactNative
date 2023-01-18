import React from 'react';
import {SafeAreaView, Alert, Button} from 'react-native';
import {TouchableOpacity, TouchableHighlight, Text} from 'react-native';
import {TextInput} from 'react-native';

const onPress = () => Alert.alert('home pressed.', 'message')

export default function App() {
  //Button은 onPress속성/title(필수), color 속성
  //Alert는 title, message 속성
  return (
    <SafeAreaView>
      <Button title='Home' onPress={onPress}/>

      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <TextInput
        placeholder='enter your name'
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
}
