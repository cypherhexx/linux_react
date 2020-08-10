// @flow
import * as React from 'react';
import PropTable from './components/PropTable.js';
import PageHeader from './components/PageHeader.js';
import {Demo, Box} from 'gestalt';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="Demo"
    description="This component is useful for the checking the used amounts."
  />
);

card(
  <PropTable
    props={[
      {
        name: 'imageSize',
        type: 'number',
        required: true,
        description:
          'It is the GB amount of the image.',
      },
      {
        name: 'videSize',
        type: 'number',
        required: true,
        description:
          'It is GB amount of the video',
      },
      {
        name: 'soundSize',
        type: 'number',
        required: true,
        description:
          'It is GB amount of the sound',
      },
      {
        name: 'totalSize',
        type: 'number',
        required: true,
        description:
          'Total Size',
      },
    ]}
  />
);

card(
  <Box width={500}>
     <Demo imageSize={10} soundSize={10} videoSize={5} totalSize={30} />
  </Box>
);

export default cards;
