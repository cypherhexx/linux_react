// @flow
import React from 'react';
import { Box, Letterbox, Image, Text, Icon } from 'gestalt';

export default function ProfileSideBar() {
  return (
    <Box
      display="none"
      direction="column"
      mdDisplay="flex"
      padding={4}
      mdPadding={6}
      lgPadding={8}
    >
      <Letterbox width={230} height={300} contentAspectRatio={564 / 806}>
        <Image
          alt="tall"
          src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTEwNjE0Njg2MTReQTJeQWpwZ15BbWU3MDEyODM1ODc@._V1_UY256_CR1,0,172,256_AL_.jpg"
          naturalWidth={564}
          naturalHeight={806}
        >
          <Box padding={3}>
            <Text color="white">fxcvvx</Text>
          </Box>
        </Image>
      </Letterbox>
      <Box width={230} padding={3}>
        <Box
          direction="row"
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Text bold="b700" size="xl">
            Clifford Izquierdo
          </Text>
          <Box marginStart={3} alignItems="baseline">
            <Icon
              icon="check-circle"
              accessibilityLabel="Verified"
              color="green"
            />
          </Box>
        </Box>
        <Box direction="row" display="flex" paddingY={1}>
          <Box marginEnd={2}>
            <Icon
              icon="pinterest"
              accessibilityLabel="From Cuba"
              color="black"
            />
          </Box>
          <Text bold="b400" size="sm">
            New York, United States
          </Text>
        </Box>
        <Box
          marginTop={5}
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="start"
        >
          <Box marginEnd={3}>
            <Text size="md" bold="b700">
              Babalawo{' '}
            </Text>
            <Text size="xs" bold="b400">
              Since Mar, 2018{' '}
            </Text>
          </Box>
        </Box>
        <Box paddingY={3}>
          <Text size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
        <Box
          direction="row"
          display="flex"
          justifyContent="between"
          alignItems="center"
          border="btb"
        >
          <Box>
            <Text bold="b500" size="xs" color="charcoal">
              Fallowers
            </Text>
            <Box>
              <Text bold="b700" size="md" color="darkGray">
                400
              </Text>
            </Box>
          </Box>
          <Box border="bl" padding={2}>
            <Text bold="b500" size="xs" color="charcoal">
              Fallowing
            </Text>
            <Text bold="b700" size="md" color="darkGray">
              1300
            </Text>
          </Box>
          <Box border="bl" padding={2}>
            <Text bold="b500" size="xs" color="charcoal">
              Stories
            </Text>
            <Text bold="b700" size="md" color="darkGray">
              1300
            </Text>
          </Box>
        </Box>
        <Box paddingY={5}>
          <Text size="sm" bold="b700">
            {' '}
            Speaks:
          </Text>
          <Box>
            <Text size="sm" inline>
              English,
            </Text>{' '}
            <Text size="sm" inline>
              German,
            </Text>{' '}
            <Text size="sm" inline>
              Italy,
            </Text>{' '}
            <Text size="sm" inline>
              Spanish
            </Text>
          </Box>
        </Box>
        <Box>
          <Text size="sm" bold="b700">
            {' '}
            Website
          </Text>
          <Text size="sm" inline>
            www.hudnu.com
          </Text>
        </Box>
        <Box marginTop={3}>
          <Text size="sm" bold="b700" >
            {' '}
            Social networks
          </Text>
          <Box direction="row" display="flex" paddingY={2}>
            <Box marginEnd={3}>
              <Icon
                icon="facebook"
                accessibilityLabel="Verified with Facebook"
                color="darkGray"
              />
            </Box>
            <Box marginEnd={3}>
              <Icon
                icon="google-plus"
                accessibilityLabel="Verified with Google"
                color="darkGray"
              />
            </Box>
            <Box marginEnd={3}>
              <Icon
                icon="twitter"
                accessibilityLabel="Verified with Twitter"
                color="darkGray"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
