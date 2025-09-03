import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imageSrc: ImageSourcePropType;
};

const ImageViewer = ({ imageSrc }: Props) => {
  return <Image source={imageSrc} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    // width: 320,
    height: 440,
    borderRadius: 18,
  },
});
