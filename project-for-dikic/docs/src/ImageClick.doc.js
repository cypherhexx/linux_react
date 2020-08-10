// @flow
import * as React from 'react';
import PropTable from './components/PropTable.js';
import PageHeader from './components/PageHeader.js';
import {ImageClick, Box} from 'gestalt';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="ImageClick"
    description="This component is useful for the checking the Image Click."
  />
);

card(
  <PropTable
    props={[
      {
        name: 'imageurl',
        type: 'string',
        required: true,
        description:
          'It is the imageurl.',
      },
      {
        name: 'title',
        type: 'string',
        required: true,
        description:
          'It is title',
      },
      {
        name: 'subtitle',
        type: 'string',
        required: true,
        description:
          'It is substring',
      },
    ]}
  />
);

card(
  <Box width={800}>
     <ImageClick
    subtitle="Science Name"
    imageurl="https://live.staticflickr.com/65535/47587238132_4683fdabb2_b.jpg"
    title="Humming Bird"
  />
  </Box>
);

export default cards;
