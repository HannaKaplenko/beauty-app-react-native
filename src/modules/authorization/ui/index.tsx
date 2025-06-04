import React from 'react';
import { getStyles } from './styles';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useAuthorization } from '../presenters/useAuthorization';
import { useUIContext } from '../../../UIProvider';

export const AuthorizationView = () => {
    const { form, showPassword, onChangeLogin, onChangePassword, onAuthorize, setShowPassword } = useAuthorization();
    const { colors } = useUIContext();
    const styles = getStyles(colors);

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
                            <Image source={require("../../../../assets/images/eye.png")} style={styles.eyeButton} accessibilityLabel="eye" />
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
