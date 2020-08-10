// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Flag.css';
import flags from './flags/index.js';

type Props = {|
  accessibilityLabel: string,
  flag?: $Keys<typeof flags>,
  dangerouslySetSvgPath?: { __path: string },
  size?: number | string,
|};

const FlagNames = Object.keys(flags);

export default function Flag(props: Props) {
  const { accessibilityLabel, dangerouslySetSvgPath, flag, size = 16 } = props;

  const cs = classnames(styles.flag, styles.iconBlock);

  const path =
    (flag && flags[flag]) ||
    /* eslint-disable-next-line no-underscore-dangle */
    (dangerouslySetSvgPath && dangerouslySetSvgPath.__path) ||
    undefined;

  const ariaHiddenn = accessibilityLabel === '' ? true : null;

  return (
    <svg
      className={cs}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      aria-hidden={ariaHiddenn}
      aria-label={accessibilityLabel}
      role="img"
    >
      <path d={path} />
    </svg>
  );
}

Flag.flags = FlagNames;

Flag.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  dangerouslySetSvgPath: PropTypes.shape({
    __path: PropTypes.string,
  }),
  flag: PropTypes.oneOf(FlagNames),

  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
