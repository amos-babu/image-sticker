import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imageSrc: ImageSourcePropType;
  selectedImage?: string;
};

const ImageViewer = ({ imageSrc, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imageSrc;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
