// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.css';
import Text from './Text.js';
import shadows from './Shadows.css';

const DEFAULT_TEXT_COLORS = {
  blue: 'white',
  green: 'white',
  gray: 'darkGray',
  red: 'white',
  transparent: 'white',
  lightGray: 'darkGray',
  orange: 'white',
};

type Props = {|
  accessibilityExpanded?: boolean,
  accessibilityHaspopup?: boolean,
  accessibilityLabel?: string,
  color?:
    | 'gray'
    | 'red'
    | 'blue'
    | 'transparent'
    | 'green'
    | 'lightGray'
    | 'orange',
  disabled?: boolean,
  inline?: boolean,
  name?: string,
  onClick?: ({ event: SyntheticMouseEvent<> }) => void,
  size?: 'sm' | 'md' | 'lg',
  text: string,
  textColor?: 'lightGray' | 'darkGray' | 'blue' | 'red' | 'green' | 'white',
  type?: 'submit' | 'button',
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
|};

export default function Button(props: Props) {
  const {
    accessibilityExpanded,
    accessibilityHaspopup,
    accessibilityLabel,
    color = 'orange',
    disabled = false,
    inline = false,
    name,
    onClick,
    size = 'md',
    text,
    textColor,
    type = 'button',
    shadow = 'none',
  } = props;

  const classes = classnames(styles.button, {
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [shadows.shadowNone]: shadow === 'none',
    [shadows.sm]: shadow === 'sm',
    [shadows.md]: shadow === 'md',
    [shadows.lg]: shadow === 'lg',
    [shadows.xl]: shadow === 'xl',
    [shadows.xxl]: shadow === 'xxl',
    [styles.solid]: color !== 'transparent',
    [styles[color]]: !disabled,
    [styles.disabled]: disabled,
    [styles.enabled]: !disabled,
    [styles.inline]: inline,
    [styles.block]: !inline,
  });

  /* eslint-disable react/button-has-type */
  return (
    <button
      aria-expanded={accessibilityExpanded}
      aria-haspopup={accessibilityHaspopup}
      aria-label={accessibilityLabel}
      className={classes}
      disabled={disabled}
      name={name}
      onClick={event => onClick && onClick({ event })}
      type={type}
    >
      <Text
        align="center"
        bold
        color={disabled ? 'gray' : textColor || DEFAULT_TEXT_COLORS[color]}
        overflow="normal"
        size={size}
      >
        {text}
      </Text>
    </button>
  );
  /* eslint-enable react/button-has-type */
}

Button.propTypes = {
  accessibilityExpanded: PropTypes.bool,
  accessibilityHaspopup: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  color: PropTypes.oneOf([
    'blue',
    'gray',
    'red',
    'green',
    'transparent',
    'lightGray',
    'orange',
  ]),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'xxl']),
  text: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf([
    'darkGray',
    'blue',
    'red',
    'green',
    'lightGray',
    'white',
  ]),
  type: PropTypes.oneOf(['button', 'submit']),
};
