import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { router } from "expo-router";

const styles = StyleSheet.create({
  pressableStyling: {
    flexDirection: "column",
  },
  imageStyling: {
    width: 125,
    height: 125,
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
    marginBottom: 10,
  },
  productNameStyling: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#606060",
    fontWeight: "600",
    marginBottom: 5,
    width: 130,
  },
  productPriceStyling: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    color: "#303030",
    fontWeight: "700",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 30,
  },
  productInfoContainer: {
    flexDirection: "column",
  },
  removeStyling: {
    width: 30,
    height: 30,
    borderRadius: 0,
  },
  greyLine: {
    width: 355,
    height: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 12,
    marginBottom: 12,
  },
});

interface FavoriteProductProps {
  productName: string;
  productPrice: string;
  productDescription: string;
  imgSource: ImageSourcePropType;
  imageKey: string; // <-- used for routing
}

export function FavoriteProduct({
  productName,
  productPrice,
  productDescription,
  imgSource,
  imageKey,
}: FavoriteProductProps) {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/productview",
          params: {
            name: productName,
            price: productPrice,
            description: productDescription,
            image: imageKey,
          },
        })
      }
      style={styles.pressableStyling}
    >
      <View style={styles.infoContainer}>
        <Image style={styles.imageStyling} source={imgSource} />
        <View style={styles.productInfoContainer}>
          <Text style={styles.productNameStyling}>{productName}</Text>
          <Text style={styles.productPriceStyling}>$ {productPrice}</Text>
        </View>
        <Image
          style={styles.removeStyling}
          source={require("@/assets/icons/remove.png")}
        />
      </View>
      <View style={styles.greyLine} />
    </Pressable>
  );
}

export default FavoriteProduct;