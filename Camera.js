import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
export default class Camera extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const options = {
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    };
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1, alignItems: 'center'}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={options}
        focusDepth={0}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        exposure={0}
        whiteBalance={RNCamera.Constants.WhiteBalance.cloudy}
        defaultVideoQuality={RNCamera.Constants.VideoQuality['2160p']}
      />
    );
  }
}
