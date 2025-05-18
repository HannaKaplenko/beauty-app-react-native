import React, { useState } from 'react';
import { styles } from './styles';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const AuthorizationView = () => {
  const [form, setForm] = useState({ username: '', password: '', });
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation<any>();
  const [error, setError] = useState("");
  const onChangeLogin = (text: string) => {
    setForm({ ...form, username: text });
  };
  const onChangePassword = (text: string) => {
    setForm({ ...form, password: text });
  };
  const onAuthorize = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });
      const data = await response.json();
      if (data.accessToken) {
        navigation.navigate('ProductsView');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Ur Needs</Text>
          <Text style={styles.label}>Введіть username</Text>
          <TextInput
            value={form.username}
            onChangeText={onChangeLogin}
            placeholder="Введіть логін"
            style={styles.input} />
          <Text style={styles.label}>Введіть password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.password}
              onChangeText={onChangePassword}
              placeholder="Введіть пароль"
              secureTextEntry={!showPassword}
              style={styles.input} />
            <TouchableOpacity style={styles.eyeButton} onPressIn={() => setShowPassword(!showPassword)}>
              <Image source={require("../../../assets/images/eye.png")} style={styles.eyeButton} accessibilityLabel="eye" />
            </TouchableOpacity>
          </View>
          <Text style={styles.message}> Якщо ви забули пароль зверніться до адміністратора </Text>
          <TouchableOpacity style={styles.button} onPress={onAuthorize}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
