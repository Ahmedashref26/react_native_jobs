import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handelPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handelPress}>
      <Image source={iconUrl} style={styles.btnImg(dimension)}></Image>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
