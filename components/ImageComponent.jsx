import React from 'react';
//DImensions, 반응형, 기기마다 다른 화면크기값을 넘겨받음
import { Dimensions } from 'react-native';
import ImageBlurLoading from 'react-native-image-blur-loading';
//현재 가로세로길이를 받아오고, 그 화면을 3등분하기위해 3을 나눔
const imageWidth = Dimensions.get('window').width / 3;
export default function ImageComponent({ image }) {
  return (
    //이미지 3등분, 정사각형으로 배열하기위해 아래와 같이 보이는 이미지 세팅
    //이미지가 로딩이 안된다면 ImageBlurLoading으로 로딩화면 구현
    <ImageBlurLoading
      withIndicator
      thumbnailSource={{ uri: image }}
      source={{ uri: image }}
      style={{ width: imageWidth, height: imageWidth }}
    />
  );
}
