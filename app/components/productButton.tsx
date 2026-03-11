import { Pressable, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { router } from "expo-router";

const styles = StyleSheet.create({
    pressableStyling: { 
        flexDirection: "column",
    },
    imageStyling: {
        width: 170, 
        height: 220,
        borderRadius: 10,
        backgroundColor: "#C4C4C4",
        marginBottom: 10,
    },
    productNameStyling: { 
        fontFamily: "NunitoSans",
        fontSize: 14,
        color: "#606060",
        fontWeight: "400",
        marginBottom: 5,
    },
    productPriceStyling: { 
        fontFamily: "NunitoSans",
        fontSize: 14,
        color: "#303030",
        fontWeight: "700" 
    },
});

interface ProductButtonProps {
  productName: string;
  productPrice: string;
  productDescription: string;
  imgSource: ImageSourcePropType;
  imageKey: string; // <-- used for routing
}

export function ProductButton({
  productName,
  productPrice,
  productDescription,
  imgSource,
  imageKey,
}: ProductButtonProps) {
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
      <Image style={styles.imageStyling} source={imgSource} />

      <Text style={styles.productNameStyling}>
        {productName}
      </Text>

      <Text style={styles.productPriceStyling}>
        $ {productPrice}
      </Text>
    </Pressable>
  );
}

export default ProductButton;