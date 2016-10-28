
import React from 'react';
import ProgressBar from 'ProgressBarAndroid';
import NativeBaseComponent from 'native-base/Components/Base/NativeBaseComponent';
import computeProps from 'native-base/Utils/computeProps';

export default class SpinnerNB extends NativeBaseComponent {

  prepareRootProps() {
    const type = {
      height: 40,
    };

    const defaultProps = {
      style: type,
    };

    return computeProps(this.props, defaultProps);
  }


  render() {
    const getColor = () => {
      if (this.props.color) {
        return this.props.color;
      } else if (this.props.inverse) {
        return this.getTheme().inverseSpinnerColor;
      }

      return this.getTheme().defaultSpinnerColor;
    };

    return (
      <ProgressBar
        {...this.prepareRootProps()}
        styleAttr={this.props.size ? this.props.size : 'Large'}
        color={getColor()}
      />
        );
  }

}
