import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.createRandomPerson()
const people = D.makeArray(100).map(D.createRandomPerson)
//<Text>{person, null, 2}</Text> 은 불가능
//XML 구문에서 자식 요소는 문자열이거나 XML 요소여야 하기 때문
//JSON.stringify를 사용하여 객체를 문자열로 변환
export default function App() {
  const childern = people.map((person) => (
    <Person key={person.id} person={person} />
  ))
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(person, null, 2)}</Text>
      <ScrollView>{childern}</ScrollView>
    </SafeAreaView>
  );
}

