import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AuthFooter() {
  return (
    <View style={{ marginTop: 16, alignItems: "center" }}>
      <Text style={{ fontSize: 13 }}>
        Already have an account?{" "}
        <Link href="/sign-in" style={{ fontWeight: "700" }}>
          Sign In
        </Link>
      </Text>
    </View>
  );
}