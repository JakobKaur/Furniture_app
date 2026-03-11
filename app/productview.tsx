import { Image, View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ContactButton } from "@/app/components/contactButton";

const styles = StyleSheet.create({
  productImageStyling: {
    width: "100%",
    height: 521,
  },
  productInfoContainer: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    paddingTop: 0,
  },
  productName: {
    fontFamily: "Gelasio",
    fontSize: 24,
    fontWeight: "500",
  },
  productPrice: {
    fontFamily: "NunitoSans",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 19,
  },
  productDescription: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "300",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 15,
    marginTop: 50,
    justifyContent: "center",
  },
  favouriteButton: {
    height: 60,
    width: 60,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

type ProductParams = {
  name: string;
  price: string;
  description: string;
  image: string; // image key
};

const imageMap: Record<string, any> = {
  stand: require("@/assets/images/products/stand.jpg"),
  lamp: require("@/assets/images/products/lamp.jpg"),
  desk: require("@/assets/images/products/desk.jpg"),
  chair: require("@/assets/images/products/chair.jpg"),
};

export default function ProductView() {
  const { name, price, description, image } =
    useLocalSearchParams<ProductParams>();

  const resolvedImage = imageMap[image] ?? imageMap.stand;

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image style={styles.productImageStyling} source={resolvedImage} />

      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          width: "100%",
          height: 35,
          transform: [{ translateY: -12 }],
        }}
      />

      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{name}</Text>

        <Text style={styles.productPrice}>$ {price}</Text>

        <Text style={styles.productDescription}>{description}</Text>

        <View style={styles.actionButtons}>
          <Pressable style={styles.favouriteButton}>
            <Image
              style={{ height: 26, width: 16 }}
              source={require("@/assets/icons/navbar-icons/marker-fill.png")}
            />
          </Pressable>

          <ContactButton
            label="Contact Seller"
            onPress={() => console.log("yo!")}
          />
        </View>
      </View>
    </View>
  );
}