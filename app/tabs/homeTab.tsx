import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryButton } from "@/app/components/categoryButton";
import { ProductButton } from "@/app/components/productButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start",
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
  searchIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 0,
  },
  categoriesContainer: {
    flexDirection: "row",
    gap: 25,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  /* THIS IS FOR PRODUCTS STOP EDITING THE CATEGORIES */
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    justifyContent: "center",
  },
});

interface HomeTabProps {
  text?: string;
}

export function HomeTab({ text }: HomeTabProps) {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.headerStyling}>
        <Image
          style={styles.searchIcon}
          source={require("@/assets/icons/search.png")}
        />
        <Text style={styles.headerTextStyling}>Find All You Need</Text>
      </View>
      <View style={styles.categoriesContainer}>
        <CategoryButton label={"Popular"} iconName="star" />
        <CategoryButton label={"Chair"} iconName="chair" />
        <CategoryButton label={"Table"} iconName="table" />
        <CategoryButton label={"Armchair"} iconName="armchair" />
        <CategoryButton label={"Bed"} iconName="bed" />
      </View>
      <ScrollView contentContainerStyle={styles.productsContainer}>
        <ProductButton
          productName="Lamp"
          productPrice="20.00"
          productDescription="Lamp"
          imgSource={require("@/assets/images/products/lamp.jpg")}
          imageKey="lamp"
        />
        <ProductButton
          productName="Stand"
          productPrice="50.00"
          productDescription="Stand"
          imgSource={require("@/assets/images/products/stand.jpg")}
          imageKey="stand"
        />
        <ProductButton
          productName="Chair"
          productPrice="30.00"
          productDescription="Chair"
          imgSource={require("@/assets/images/products/chair.jpg")}
          imageKey="chair"
        />
        <ProductButton
          productName="Desk"
          productPrice="100.00"
          productDescription="Desk"
          imgSource={require("@/assets/images/products/desk.jpg")}
          imageKey="desk"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeTab;