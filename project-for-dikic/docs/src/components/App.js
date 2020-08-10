// @flow
import * as React from 'react';
import { Box, Column } from 'gestalt';
import Header from './Header.js';

type Props = {|
  children?: React.Node,
|};

export default function App(props: Props) {
  const { children } = props;
  return (
    <Box minHeight="100vh">
      <Header />
      <Box>
        <Column span={12}>
          <Box>{children}</Box>
        </Column>
      </Box>
    </Box>
  );
}
