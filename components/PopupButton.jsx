import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function PopupButton({ CustomAlert, title }) {
  return (
    <View>
      {/*OnPress은 함수이고, 누르면 CUustomAlert 함수가 실행*/}
      <TouchableOpacity onPress={CustomAlert}>
        {/*넘겨받은 변수를 나타내주고, 팝업버튼이라는 문자열이 나타난다*/}
        <Text> {title}팝업 버튼 </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
