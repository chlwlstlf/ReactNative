import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {ImageBackground, Image} from 'react-native';
import {MD2Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize = 30, iconColor = 'white'
const icons = ['home', 'table-search', 'face-woman-profile', 'account-settings']

export default function BottomBar(){
  const childern = icons.map((name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  )))
  return  (
    <View style={[styles.view]}>{childern}</View>

  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10, backgroundColor: MD2Colors.lightBlue500
  }
})