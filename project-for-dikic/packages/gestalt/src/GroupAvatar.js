// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from './Box.js';
import Avatar from './Avatar.js';
import typography from './Typography.css';

const AVATAR_SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 72,
};

type Props = {|
  collaborators: Array<{|
    name: string,
    src?: string,
  |}>,
  size?: 'xs' | 'sm' | 'md' | 'lg',
|};

const total = (
  <svg
    width="100%"
    viewBox="-50 -50 100 100"
    version="1.1"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* <title>{totalCollaborators}</title> */}
    <text
      fontSize="50px"
      fill="#fff"
      dominantBaseline="central"
      textAnchor="middle"
      className={[
        typography.antialiased,
        typography.sansSerif,
        typography.leadingSmall,
        typography.fontWeightBold,
      ].join(' ')}
    >
      18
    </text>
  </svg>
);

export default function GroupAvatar(props: Props) {
  const { collaborators, size } = props;
  const avatarWidth = size ? AVATAR_SIZES[size] : '100%';
  const avatarHeight = size ? AVATAR_SIZES[size] : '100%';
  return (
    <Box display="flex" direction="row" paddingY={2} alignItems="center">
      {collaborators.map((collaborator = { name: '', src: undefined }) => {
        const { name, src } = collaborator;
        return (
          <Box marginEnd={-2}>
            <Avatar
              name={name}
              size={size}
              src={src}
              outline
              dangerouslySetInlineStyle={{ __style: { position: 'absolute' } }}
            />
          </Box>
        );
      })}
      <Box
        color="white"
        overflow="hidden"
        shape="circle"
        width={avatarWidth}
        height={avatarHeight}
        position="relative"
        dangerouslySetInlineStyle={{
          __style: {
            ...{ boxShadow: '0 0 0 2px #fff' },
            // willChange: transform fixes a strange behavior where the border of the children
            // are not properly trimmed even though overflow: hidden is set
            willChange: 'transform',
          },
        }}
      >
        <Box
          aria-label={name}
          color="blue"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {total}
        </Box>
      </Box>
    </Box>
  );
}

GroupAvatar.propTypes = {
  collaborators: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      src: PropTypes.string,
    })
  ).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
