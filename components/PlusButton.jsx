import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//Plus함수를 넘겨받는다.
export default function PlusButton({ Plus }) {
  return (
    <TouchableOpacity onPress={Plus} style={styles.container}>
      {/*넘겨받은 변수를 나타내주고, 팝업버튼이라는 문자열이 나타난다*/}
      <Text> 플러스 </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: 50,
    height: 50,
  },
});
