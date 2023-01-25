import React, {Fragment} from 'react';
import {Platform, SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import {MD2Colors} from 'react-native-paper'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function App(): JSX.Element {
  const iconPressed = () => Alert.alert('Icon pressed.')
  return (
    <>
      <SafeAreaView style={styles.flex}>
        <TopBar></TopBar>
        <Content></Content>
        <BottomBar></BottomBar>
        <View style={[styles.absoluteView]}>
          <Icon name="feather" size={50} color="white" onPress={iconPressed} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: MD2Colors.lightBlue100},
  absoluteView: {
    backgroundColor: MD2Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35
  }
})