import Button from "@/components/button";
import ImageViewer from "@/components/imageViewer";
import ImagePicker from "@expo-image-picker";
import { StyleSheet, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/images/background-image.png");

export default function Index() {
  const pickImageAsync = async () => {
    // let result = await ImagePicker;
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={PlaceHolderImage} />
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
