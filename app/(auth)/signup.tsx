import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";

import { styles } from "./signup.styles";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => router.back()} />

      <Input
        label="Email"
        placeholder="example@mail.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secure
      />
      <AuthFooter />
    </View>
  );
}