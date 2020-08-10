// @flow
import * as React from 'react';
import james from './avatars/james.jpg';
import keerthi from './avatars/keerthi.jpg';
import shanice from './avatars/shanice.jpg';

import PropTable from './components/PropTable.js';
import Example from './components/Example.js';
import PageHeader from './components/PageHeader.js';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="Card"
    description="
The Card component is meant to highlight content in grids. It visually shows that items belong together and highlights the items on hover.
"
  />
);

card(
  <PropTable
    props={[
      {
        name: 'active',
        type: '?boolean',
        defaultValue: false,
      },
      {
        name: 'children',
        type: 'React.Node',
      },
      {
        name: 'image',
        type: 'React.Node',
      },
      {
        name: 'onMouseEnter',
        type: '({ event: SyntheticMouseEvent<HTMLDivElement> })',
      },
      {
        name: 'onMouseLeave',
        type: '({ event: SyntheticMouseEvent<HTMLDivElement> })',
      },
    ]}
  />
);

card(
  <Example
    description={`
    Using \`Card\` is as easy as it can be, simply wrap your component(s) with it. Ideally all of the children should be clickable and cover 100% of the area
  `}
    name="Example"
    defaultCode={`
class CardExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleMouseEnter = this._handleMouseEnter.bind(this);
    this.handleMouseLeave = this._handleMouseLeave.bind(this);
  }
  _handleMouseEnter() {
    this.setState(() => ({ hovered: true }));
  }
  _handleMouseLeave() {
    this.setState(() => ({ hovered: false }));
  }
  render() {
    return (
      <Box>
      
      <Box maxWidth={230} padding={2} column={12} >
        <Card
          image={
            <Mask shape="rounded"  >
              <img
                alt="subliming.tumblr.com"
                src="/static/media/stock8.f9399386.jpg"
                style={{ maxWidth: '100%', display: 'block' }}
              />
            </Mask>
          }
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <Box 
          alignItems="center"
          direction="row"
          display="flex"
          >
            <Box paddingX={1} flex="grow">
              <Text align="left" size="sm" bold>
                <Link href="https://pinterest.com">
                  <Box paddingX={1} >
                  Some text here.
                  </Box>
                </Link>
              </Text>
              <Text align="left" size="sm">
                <Link href="https://pinterest.com">
                  <Box paddingX={1} >
                  second line here
                  </Box>
                </Link>
              </Text>
            </Box>
            <Box>
              <Box  paddingX={2}>
                <Icon icon="duplicate" accessibilityLabel="Pin" color="darkGray" />
            </Box>
          </Box>
          </Box>
         <Box
          alignItems="center"
          direction="row"
          display="flex"
          
          >
          <Box paddingX={1}  flex="grow">
            <Box
            alignItems="center"
            direction="row"
            display="flex"
            >
            <Box paddingX={1}>
              <Avatar
                  size="lg"
                  src="https://i.ibb.co/ZfCZrY8/keerthi.jpg"
                  name="Nathalie cole"
              />
            </Box>
            <Box paddingX={1}>
            <Text bold>Natalie</Text>
            <Text size="xs">Jul 20, 2020</Text>
            </Box>
            </Box>
          </Box>
          <Box>
              <Box  paddingX={2}>
                <Icon icon="duplicate" accessibilityLabel="Pin" color="darkGray" />
            </Box>
          </Box>
        </Box>
        </Card>
      </Box>
      </Box>
    );
  }
}
`}
  />
);

export default cards;
