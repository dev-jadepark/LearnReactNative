import React from 'react';
import {StyleSheet, View} from 'react-native';

/*props사용*/
/*
function Box(props) {
  // return <View style={[styles.box, styles.rounded ? styles.rounded : null]} />;
  //return <View style={[styles.box, props.rounded ? styles.rounded : null]} />;
  return (
    <View
      style={[
        styles.box,
        props.rounded && styles.rounded,
        sizes[props.size],
        {backgroundColor: props.color},
      ]}
    />
  );
}
*/

//객체 구조 분해할당 사용
function Box({rounded, size, color}) {
  // return <View style={[styles.box, styles.rounded ? styles.rounded : null]} />;
  //return <View style={[styles.box, props.rounded ? styles.rounded : null]} />;
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

// props 객체 구조 분해 할당 (비구조화 할당)
const object = {
  a: 1,
  b: 2,
  c: 3,
};

// const a = object.a;
// const b = object.b;
// const c = object.c;

const {a, b, c} = object;

function print(params) {
  console.log(params.name);
  console.log(params.description);
}

function print2({name, description}) {
  console.log(name);
  console.log(description);
}

export default Box;
