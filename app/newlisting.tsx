import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlueButton } from "@/app/components/blueButton"
import { Picker } from "@react-native-picker/picker";

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
    width: "86%",
  },
  headerTextStyling: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  backIcon: {
    width: 14,
    height: 24,
  },
  backIconC: {
    width: 30,
    height: 24,
    position: "absolute",
    left: 0,
  },
  formTitled: {
    width: "80%",
    marginBottom: 30,
  },
  formTitle: {
    color: "#4f63ac",
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Montserrat",
    marginBottom: 6,
  },
  input: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#8D9BB5",
    backgroundColor: "#FFF",
    paddingTop: 19,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "500",
    minHeight: 60,
    maxHeight: 200,
  },
  dropdownContainer: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#8D9BB5",
    backgroundColor: "#FFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 3,
    paddingBottom: 3,
    justifyContent: "center",
  },
  pickerStyle: {
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: "#303030",
    height: 60, 
  },
  placeholderText: {
    position: "absolute",
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: "#C5C5C5",
    left: 16,
    top: 23,
    zIndex: 1,
  },
  uploadButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#909191",
    borderStyle: "dashed",
    backgroundColor: "#FFF",
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function FavoriteTab() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header stays fixed */}
      <View style={styles.headerStyling}>
        <Pressable style={styles.backIconC} onPress={() => router.back()}>
          <Image
            style={styles.backIcon}
            source={require("@/assets/icons/backarrow.png")}
          />
        </Pressable>
        <Text style={styles.headerTextStyling}>Create a new listing</Text>
      </View>

      {/* Scrollable form */}
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formTitled}>
          <Text style={styles.formTitle}>Upload Photos</Text>
          <Pressable style={styles.uploadButton}>
            <View style={{height: "40%", width: "40%", backgroundColor: "#DADADA", borderRadius: 100, justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: "#FFF", fontWeight: "700", fontSize: 20, fontFamily: "Montserrat", textAlign: "center", textAlignVertical: "center"}}>+</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.formTitled}>
          <Text style={styles.formTitle}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Listing Title"
            placeholderTextColor="#C5C5C5"
            value={title}
            onChangeText={setTitle}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.formTitled}>
          <Text style={styles.formTitle}>Category</Text>
          <View style={styles.dropdownContainer}>
            {selectedValue === null && (
              <Text style={styles.placeholderText}>Select an option...</Text>
            )}
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={styles.pickerStyle}
              dropdownIconColor="#8D9BB5"
            >
              <Picker.Item label="Option 1" value="option1" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
        </View>

        <View style={styles.formTitled}>
          <Text style={styles.formTitle}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter price in USD"
            placeholderTextColor="#C5C5C5"
            value={price}
            onChangeText={setPrice}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.formTitled}>
          <Text style={styles.formTitle}>Description</Text>
          <TextInput
            style={[styles.input, { height: 150 }]}
            placeholder="Tell us more..."
            placeholderTextColor="#C5C5C5"
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
          />
        </View>

        <BlueButton label="Submit" />
      </ScrollView>
    </SafeAreaView>
  );
}