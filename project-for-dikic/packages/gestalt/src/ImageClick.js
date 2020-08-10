import React from "react";
import { render } from "react-dom";
import classnames from "classnames";
import styles from "./ImageClick.css";
import Box from './Box.js';
import Text from './Text.js';
import Card from './Card.js';
import Image from './Image.js';
import Mask from './Mask.js';
import Icon from './Icon.js';
import PropTypes, { string } from 'prop-types';
import { type AbstractEventHandler } from './AbstractEventHandler.js';

type Props = {|
  imageurl: string,
  title: string,
  subtitle: string
|};

export default function ImageClick(props) {
  const { subtitle, title, imageurl, onMouseEnter, onMouseLeave } = props;
  const [hovered, setHovered] = React.useState("card");
  const [click, setClick] = React.useState("none");
  const [clickable, setClickable] = React.useState("noclick");
  const [imgUrl, setImgUrl] = React.useState(imageurl);
  const [Title, setTitle] = React.useState(title);
  const [subTitle, setSubTitle] = React.useState(subtitle);


  const handleMouseEnter = (event) => {
    setHovered("team");
    if (onMouseEnter) {
      onMouseEnter({ event });
    }
  };

  const handleMouseLeave = (event) => {
    if (onMouseLeave) {
      onMouseLeave({ event });
    }
    setHovered("card");
  };

  function clickevent() {
    if (click == "none") {
      setClick("clicked");
      setHovered("other");
      setClickable("clickable");
    } else {
      setClick("none");
      setClickable("noclick");
      setHovered("team");
    }
  }

  return (
    <Mask shape="rounded">
      <div className={click} id="clicked" onClick={clickevent}>
        <Box position="absolute" top left padding={2}>
          <Box position="relative" width={150}>
            <Box top left padding={2}>
              <div onClick={clickevent}>
                <Icon accessibilityLabel="Pin" icon="compass" size="35" />
              </div>
            </Box>
          </Box>
        </Box>
      </div>
      <div onClick={clickevent} >
        <Card
          position="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          image={
            <Image
              alt="DSC02565"
              naturalHeight={530}
              naturalWidth={800}
              src={imgUrl}
              color="gray"
            />
          }
        >
          <div className={hovered}>
            <Box position="absolute" top left padding={2}>
              <Box position="relative" width={150}>
                <Box top left padding={2}>
                  <div onClick={clickevent}>
                    <Icon
                      accessibilityLabel="Pin"
                      icon="circle-outline"
                      size="35"
                    />
                  </div>
                </Box>
              </Box>
            </Box>

            <Box position="absolute" bottom left padding={3}>
              <Text bold color="white" weight="bold">
                {Title}
              </Text>
              <Text size="sm" color="white">
                {subTitle}
              </Text>
            </Box>
          </div>
          <div className={clickable}>
            

            <Box position="absolute" bottom left padding={3}>
              <Text bold color="white" weight="bold">
                {Title}
              </Text>
              <Text size="sm" color="white">
                {subTitle}
              </Text>
            </Box>
          </div>
        </Card>
      </div>
    </Mask>
  );
}

