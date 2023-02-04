import React, {useCallback, useState} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native'
import { MD2Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import {Avatar, IconText} from '../components'
import {styles} from './Person.style'
import moment from 'moment-with-locales-es6' //과거와 현재의 시간 차이 쉽게 표현
import PersonIcons from './PersonIcons'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}


const PersonUsingObjectState: FC<PersonProps> = ({person: initialPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), [])
  
  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0}
  })

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50}
        onPress={avatarPressed} />
      </View>

      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
        </View>
        <Icon name='trash-can-outline' size={26} color={MD2Colors.lightBlue500} onPress={deletePressed} />
      

        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>

        <Image style={[styles.image]} source={{uri: person.image}} />

        <PersonIcons person={person} setPerson={setPerson} />
      </View>
    </View>  
  )
}
export default PersonUsingObjectState