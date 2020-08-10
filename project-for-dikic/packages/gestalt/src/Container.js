// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from './Box.js';

type Props = {|
  children?: React.Node,
|};

export default function Container(props: Props) {
  const { children } = props;
  return (
    <Box justifyContent="center" display="flex">
      <Box smContainer={10} mdContainer={9} >
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
