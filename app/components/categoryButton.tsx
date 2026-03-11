import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

const styles = StyleSheet.create({
  buttonStyling: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIconStyling: {
    width: 28,
    height: 28,
  },
  buttonTextStyling: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "400",
    color: "#999",
  },

  buttonContainer: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
  starButtonStyling: {
    backgroundColor: "#303030",
    borderRadius: 12,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  starButtonTextStyling: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "600",
    color: "#4F63AC",
    flexWrap: "nowrap",
  },
  starButtonIconStyling: {
    width: 20,
    height: 19,
  },
});

const iconMap: Record<string, ImageSourcePropType> = {
  star: require("@/assets/icons/button-icons/star.png"),
  chair: require("@/assets/icons/button-icons/chair.png"),
  table: require("@/assets/icons/button-icons/table.png"),
  armchair: require("@/assets/icons/button-icons/armchair.png"),
  bed: require("@/assets/icons/button-icons/bed.png"),
};

interface CategoryButtonProps {
  label: string;
  iconName: keyof typeof iconMap;
  onPress?: () => void;
}

export function CategoryButton({
  label,
  iconName,
  onPress,
}: CategoryButtonProps) {
  const isStar = iconName === "star";
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={isStar ? styles.starButtonStyling : styles.buttonStyling}
        onPress={onPress}
      >
        <Image
          style={
            isStar ? styles.starButtonIconStyling : styles.buttonIconStyling
          }
          source={iconMap[iconName]}
        />
      </Pressable>
      <Text
        style={isStar ? styles.starButtonTextStyling : styles.buttonTextStyling}
      >
        {label}
      </Text>
    </View>
  );
}

export default CategoryButton;