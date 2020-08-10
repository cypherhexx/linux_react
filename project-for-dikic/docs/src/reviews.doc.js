// @flow
import * as React from 'react';
import keerthi from './avatars/keerthi.jpg';
import shanice from './avatars/shanice.jpg';
import Table from './components/Table.js';

const cards = [];
const card = c => cards.push(c);

card(
  <Table
    props={[
      {
        TourName: 'name',
        reviewerName: 'string',
        tourDate: 'string',
        reviewerAvatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwNjE0Njg2MTReQTJeQWpwZ15BbWU3MDEyODM1ODc@._V1_UY256_CR1,0,172,256_AL_.jpg',
      },
      // {
      //   TourName: 'name',
      //   reviewerName: 'string',
      //   tourDate: 'string',
      //   reviewerAvatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwNjE0Njg2MTReQTJeQWpwZ15BbWU3MDEyODM1ODc@._V1_UY256_CR1,0,172,256_AL_.jpg',
      // },
      // {
      //   TourName: 'name',
      //   reviewerName: 'string',
      //   tourDate: 'string',
      //   reviewerAvatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwNjE0Njg2MTReQTJeQWpwZ15BbWU3MDEyODM1ODc@._V1_UY256_CR1,0,172,256_AL_.jpg',
      // },
    ]}
  />
);

export default cards;
