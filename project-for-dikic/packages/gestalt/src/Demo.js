
import Box from './Box.js';
import Text from './Text.js';
import Mask from './Mask.js';
import Column from './Column.js';
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


type Props = {|
  totalSize: number,
  imageSize: number,
  videoSize: number,
  soundSize: number,
|};

type State = {|
  leftBar: number,
  mainBar: number,
  rightBar: number,
|};

var leftBars;

export default class Demo extends React.Component<Props, State> {
  static propTypes = {
    totalSize: PropTypes.number,
    imageSize: PropTypes.number,
    videoSize: PropTypes.number,
    soundSize: PropTypes.number,
  };
 

  render() {
    const {
      totalSize,
      videoSize,
      imageSize,
      soundSize,
    } = this.props;
 
    let leftBar = imageSize / (imageSize + soundSize + videoSize) * 100;
    let mainBar = soundSize / (imageSize + soundSize + videoSize) * 100;
    let rightBar = 100 - leftBar - mainBar;

    leftBar = String(leftBar) + '%';
    mainBar = String(mainBar) + '%';
    rightBar = String(rightBar) + '%';
   
    return (
      <Box>
      <Text weight="bold" color="blue" size="lg">
        Storage
      </Text>
      <Text color="blue" size="md">
        {imageSize + videoSize + soundSize} GB of {totalSize} GB free used
      </Text>
      <Box>
        <Mask shape="rounded">
          <Box
            color="lightGray"
            height={10}
            alignItems="center"
            direction="row"
            display="flex"
          >
            <Box color="blue" height={12} width={leftBar}>
              <Box />
            </Box>
            <Box color="green" height={12} width={mainBar}>
              <Box />
            </Box>
            <Box color="red" height={12} width={rightBar}>
              <Box />
            </Box>
          </Box>
        </Mask>
      </Box>

      <Box display="flex" direction="row" paddingY={1}>
        <Column span={4}>
          <Box display="flex" direction="row">
           
              <Box shape="circle" marginTop={1} color="blue" width={12} height={12}>
              </Box>
            
            <Column span={5}>
              <Text color="blue" size="md">
                Images
              </Text>
            </Column>
          </Box>
        </Column>

        <Column span={4}>
          <Box display="flex" direction="row">
            <Box shape="circle" marginTop={1} color="green" width={12} height={12}>
            </Box>
            <Column span={5}>
              <Text color="green" size="md">
                Sound{" "}
              </Text>
            </Column>
          </Box>
        </Column>

        <Column span={4}>
          <Box display="flex" direction="row">
            <Box shape="circle" marginTop={1} color="red" width={12} height={12}>
            </Box>
            <Column span={5}>
              <Text color="red" size="md">
                Video{" "}
              </Text>
            </Column>
          </Box>
        </Column>
      </Box>
    </Box>
    );
  }
}

