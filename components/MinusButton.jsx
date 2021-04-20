import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//Minus 함수를 넘겨 받는다.
export default function MinusButton({ Minus }) {
  return (
    <TouchableOpacity onPress={Minus} style={styles.container}>
      {/*넘겨받은 변수를 나타내주고, 팝업버튼이라는 문자열이 나타난다*/}
      <Text> 마이너스 </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
});
