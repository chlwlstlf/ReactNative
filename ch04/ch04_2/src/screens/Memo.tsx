import React, {useMemo} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {MD2Colors} from 'react-native-paper'
import color from 'color'
import * as D from '../data'
import Person from './Person'
import {useClock} from '../hooks'

const title = 'Memo'

export default function Memo(){
  const time = useClock()
  const people = useMemo(() => D.makeArray(2).map(D.createRandomPerson), [time])

  return  (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        style={[styles.flatList]}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1,padding: 5, backgroundColor: MD2Colors.blue900}, 
  text: {fontSize: 20, color: 'white'},
  flatList: {width: '100%'},
  itemSeparator: {borderWidth: 1, borderColor: color(MD2Colors.grey500).lighten(0.5).string()}
})