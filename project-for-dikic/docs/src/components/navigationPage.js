// @flow
import React from 'react';
import { Box } from 'gestalt';
import NavLink from './NavLink.js';
import routesp from './routesPage.js';

const componentsp = Object.keys(routesp);

export default function Navigationp() {
  return (
    <Box>
      <Box
        display="flex"
        mdDisplay="none"
        overflow="scrollX"
        paddingX={4}
        paddingY={2}
      >
        <Box
          display="flex"
          role="list"
          direction="row"
          marginStart={-2}
          marginEnd={-2}
        >
          {componentsp.map((componentp, i) => (
            <Box role="listitem" key={i} flex="none">
              <NavLink to={`/${componentp}`}>
                <Box padding={2}>{componentp}</Box>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display="none"
        direction="column"
        mdDisplay="flex"
        padding={4}
        mdPadding={6}
        lgPadding={8}
      >
        <Box marginStart={-2} marginEnd={-2} role="list">
          {componentsp.map((componentp, i) => (
            <Box role="listitem" key={i}>
              <NavLink to={`/${componentp}`}>
                <Box paddingY={1} paddingX={2}>
                  {componentp}
                </Box>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
