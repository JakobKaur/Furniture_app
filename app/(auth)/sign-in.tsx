import React from "react";
import { View } from "react-native";
import { router } from "expo-router";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthHeader from "../../components/AuthHeader";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function SignInScreen() {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <AuthHeader title="Sign In" onBackPress={() => router.back()}/>

      <View style={{ marginTop: 24, gap: 12 }}>
        <Input
          placeholder="Email"
          label="email"
          autoCapitalize="none"
          value=""
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Input
          placeholder="Password"
          secure={true}
          label="Password"
          value=""
          onChangeText={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>

      <View style={{ marginTop: 16, gap: 12 }}>
        <Button title="Sign In" onPress={() => {}} />
      </View>

      <AuthFooter />
    </View>
  );
}