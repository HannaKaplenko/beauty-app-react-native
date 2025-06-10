import React from 'react';
import { getStyles } from './styles';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuthorization } from '../presenters/useAuthorization';
import { useUIContext } from '../../../UIProvider';
import FastImage from 'react-native-fast-image';

export const AuthorizationView = () => {
    const { form, showPassword, onChangeLogin, onChangePassword, onAuthorize, setShowPassword } = useAuthorization();
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Ur Needs</Text>
                    <Text style={styles.label}>{t("authorization.cardTitleUsername")}</Text>
                    <TextInput
                        value={form.username}
                        onChangeText={onChangeLogin}
                        placeholder="Введіть логін"
                        style={styles.input} />
                    <Text style={styles.label}>{t("authorization.ardTitlePassword")}</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.password}
                            onChangeText={onChangePassword}
                            placeholder="Введіть пароль"
                            secureTextEntry={!showPassword}
                            style={styles.input} />
                        <TouchableOpacity style={styles.eyeButton} onPressIn={() => setShowPassword(!showPassword)}>
                            <FastImage source={require("../../../../assets/images/eye.png")} style={styles.eyeButton} accessibilityLabel="eye" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.message}> {t("authorization.cardMessage")}</Text>
                    <TouchableOpacity style={styles.button} onPress={onAuthorize}>
                        <Text style={styles.buttonText}>{t("authorization.buttonText")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
