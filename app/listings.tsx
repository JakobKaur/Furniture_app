import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FavoriteProduct } from "@/app/components/favoriteProduct";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  headerStyling: {
  height: 60,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 34,
  },
  headerTextStyling: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});


export default function FavoriteTab() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyling}>
            <Text style={styles.headerTextStyling}>
              My Listings
            </Text>
      </View>
       <FavoriteProduct
                productName="Lamp"
                productPrice="20.00"
                productDescription="Lamp"
                imgSource={require("@/assets/images/products/lamp.jpg")}
                imageKey="lamp"
              />
                <FavoriteProduct
                  productName="Chair"
                  productPrice="30.00"
                  productDescription="Chair"
                  imgSource={require("@/assets/images/products/chair.jpg")}
                  imageKey="chair"
                />
                <FavoriteProduct
                  productName="Desk"
                  productPrice="100.00"
                  productDescription="Desk"
                  imgSource={require("@/assets/images/products/desk.jpg")}
                  imageKey="desk"
                />
    </SafeAreaView>
  );
}
