import React from 'react';
import {Text, View} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요. {props.name}</Text>
        <Text>{1 + 1}</Text>
        <Text>{getDifference(5, 4)}</Text>
      </View>
    </>
  );
}

Greeting.defaultProps = {
  name: '리액트 네이티브',
  value: '밸류',
};

function getDifference(a, b) {
  return a - b;
}

export default Greeting;
