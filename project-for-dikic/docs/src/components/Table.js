// @flow
import * as React from 'react';
import { Box, Text, Icon, IconButton, Link, Avatar, StarRating } from 'gestalt';

type Props = {|
  props: Array<{|
    name?: string,
    reviewerName?: string,
    reviewerCountry?: string,
    reviewerAvatar?: string,
    reviewStars?: number,
    reviewTitle?: number,
    reviewText?: number,
    reviewDate?: string,
    tourName?: string,
    tourDate?: string,
    tourAvatar?: string,

    // defaultValue?: any,
    // description?: ?string,
    // href: ?string,
    // name: string,
    // required?: boolean,
    // responsive?: boolean,
    // type: string,
  |}>,
  Component?: React.ComponentType<any>,
|};

const Th = ({ children }: {| children?: React.Node |}) => (
  <th style={{ borderBottom: '2px solid #EFEFEF' }}>
    <Box padding={2}>
      <Text size="sm" color="gray" overflow="normal">
        {children}
      </Text>
    </Box>
  </th>
);

const Td = ({
  border = true,
  children,
  colspan = 1,
  shrink = false,
  color = 'darkGray',
}: {
  border?: boolean,
  children?: React.Node,
  colspan?: number,
  shrink?: boolean,
  color?: 'darkGray' | 'gray',
  width?: number,
}) => (
  <td
    style={{
      verticalAlign: 'top',
      borderBottom: border && '1px solid #EFEFEF',
      padding: 0,
      width: shrink ? '50%' : '',
    }}
    colSpan={colspan}
  >
    <Box paddingX={2} marginTop={2} marginBottom={border ? 2 : 0}>
      <Text overflow="normal" leading="tall" color={color}>
        {children}
      </Text>
    </Box>
  </td>
);

const upcase = string => string.charAt(0).toUpperCase() + string.slice(1);
const sortBy = (list, fn) => list.sort((a, b) => fn(a).localeCompare(fn(b)));

export default function Table({ props: properties, Component }: Props) {
  // const hasRequired = properties.some(prop => prop.required);

  // if (process.env.NODE_ENV === 'development' && Component) {
  //   // eslint-disable-next-line react/forbid-foreign-prop-types
  //   const { displayName, propTypes } = Component;
  //   const missingProps = Object.keys(propTypes || {}).reduce((acc, prop) => {
  //     if (!properties.find(p => p.name === prop)) {
  //       return acc.concat(prop);
  //     }
  //     return acc;
  //   }, []);
  //   if (missingProps.length > 0) {
  //     // eslint-disable-next-line no-console
  //     console.warn(
  //       `${displayName || ''} is missing ${
  //         missingProps.length
  //       } Table definitions ${missingProps.join(', ')}`
  //     );
  //   }
  // }

  return (
    <Box overflow="auto">
      <table
        cellPadding={5}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'auto',
        }}
      >
        <thead>
          <tr>
            <Th>Tour</Th>
            <Th>Reviewer</Th>
            <Th>Review</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {properties.length > 0 ? (
            sortBy(properties).reduce(
              (
                acc,
                {
                  reviewerName,
                  reviewerCountry,
                  reviewerAvatar,
                  reviewStars,
                  reviewText,
                  reviewDate,
                  tourName,
                  tourDate,
                  tourAvatar,
                  name,
                },
                i
              ) => {
                acc.push(
                  <tr key={i}>
                    <Td>
                      <Box>
                        <Text overflow="normal" leading="tall">
                          <Box
                            alignItems="center"
                            direction="row"
                            display="flex"
                            paddingY={4}
                          >
                            <Box paddingX={1}>
                              <Avatar name="chrislloyd" size="md" />
                            </Box>
                            <Box paddingX={1}>
                              <Text weight="bold">{reviewerName}</Text>
                              <Text size="sm" color="gray" overflow="normal">
                                Country, City
                              </Text>
                            </Box>
                          </Box>
                          <code>{tourName}</code>
                        </Text>
                      </Box>
                    </Td>
                    <Td>
                      <Box
                        alignItems="center"
                        direction="row"
                        display="flex"
                        paddingY={4}
                      >
                        <Box paddingX={1}>
                          <Avatar
                            name="chrislloyd"
                            size="md"
                            src={reviewerAvatar}
                          />
                        </Box>
                        <Box paddingX={1}>
                          <Text weight="bold">{reviewerName}</Text>
                          <Text size="sm" color="gray" overflow="normal">
                            joined 2 years ago
                          </Text>
                        </Box>
                      </Box>
                    </Td>
                    <Td shrink>
                      <Box paddingY={4}>
                        <Box paddingX={1}>
                          <StarRating
                            rating={3.6}
                            isSelectable={false}
                            starRatedColor="#F8C765"
                            starEmptyColor="#e6e4eb"
                            isAggregateRating={false}
                            starWidthAndHeight="20px"
                            starDimension="20px"
                            starSpacing="1px"
                            numOfStars={5}
                          />
                          <Box paddingY={1}>
                            <Text size="md" color="darkGray">
                              joined 2 years ago
                            </Text>
                          </Box>
                        </Box>
                        <Box paddingY={1}>
                          <Text color="gray">
                            Also, this is a good example of symmetrical padding.
                            Also, this is a good example of symmetrical padding.
                            Also, this is a good example of symmetrical padding.
                            Also, this is a good example of symmetrical
                            padding.Also, this is a good example of symmetrical
                            padding.
                          </Text>
                        </Box>
                      </Box>
                    </Td>
                    <Td>
                      <Box
                        alignItems="center"
                        direction="row"
                        display="flex"
                        paddingY={4}
                      >
                        <Box paddingX={1}>
                          <IconButton
                            accessibilityLabel="Love"
                            bgColor="white"
                            icon="sort-ascending"
                            onClick={() => {
                              console.log('❤️');
                            }}
                          />
                        </Box>
                        <Box paddingX={1}>
                          <IconButton
                            accessibilityLabel="Love"
                            bgColor="white"
                            icon="sort-descending"
                            onClick={() => {
                              console.log('❤️');
                            }}
                          />
                        </Box>
                      </Box>
                    </Td>
                  </tr>
                );
                return acc;
              },
              []
            )
          ) : (
            <tr>
              <Td colspan={3} color="gray">
                No properties
              </Td>
            </tr>
          )}
        </tbody>
      </table>
    </Box>
  );
}
