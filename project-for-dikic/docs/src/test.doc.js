// @flow
import * as React from 'react';

import {
  Box,
  Image,
  IconButton,
  Text,
  Mask,
  Letterbox,
  Avatar,
  Button,
  Tabs,
  Container,
  Heading,
} from 'gestalt';
// import BackdropFilter from 'react-backdrop-filter';
import { Parallax } from 'react-parallax';
// import './styles.css';

import stock3 from './images/stock3.jpg';
import stock17 from './images/stock17.jpg';
import stock15 from './images/stock15.jpg';
import stock16 from './images/stock16.jpg';

const cards = [];
const card = c => cards.push(c);

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

card(
  <Box column={12} paddingX={2} >
    <Box color="red" direction="row"
  display="flex" justifyContent="center" alignItems="stretch">
        <Box color="white" mdContainer={8}>
        lo
    </Box>
    </Box>
  </Box>
);

export default cards;
