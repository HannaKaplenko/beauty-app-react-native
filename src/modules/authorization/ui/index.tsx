import React, { useState } from 'react';
import { getStyles } from './styles';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, ToastAndroid, ActivityIndicator, Pressable } from 'react-native';
import { useAuthorization } from '../presenters/useAuthorization';
import { useUIContext } from '../../../UIProvider';
import FastImage from 'react-native-fast-image';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

export const AuthorizationView = () => {
    const { form, showPassword, onChangeLogin, onChangePassword, onAuthorize, setShowPassword, isChecked, toggleCheckbox, validateLogin, validatePassword } = useAuthorization();
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<any>();
    const loginError = validateLogin(form.username);
    const passwordError = validatePassword(form.password);

    const handleSubmit = async () => {
        setLoading(true);
        const result = await onAuthorize();
        setLoading(false);
        if (!result.success) {
            ToastAndroid.show(result.error || "Error", ToastAndroid.SHORT);
        }
    };

    const isButtonDisabled = !form.username.trim() || !form.password.trim() || !isChecked;

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
                    {loginError && <Text style={styles.error}>{loginError}</Text>}
                    <Text style={styles.label}>{t("authorization.ardTitlePassword")}</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.password}
                            onChangeText={onChangePassword}
                            placeholder="Введіть пароль"
                            secureTextEntry={!showPassword}
                            style={styles.inputPassword} />
                        <Pressable style={styles.eyeButton} onPressIn={() => setShowPassword(prev => !prev)}>
                            <FastImage source={require("../../../../assets/images/eye.png")} style={styles.imageEye} accessibilityLabel="eye" />
                        </Pressable>
                    </View>
                    {passwordError && <Text style={styles.error}>{passwordError}</Text>}
                    <CheckBox
                        isChecked={isChecked}
                        onClick={toggleCheckbox}
                        rightText={t("authorization.checkBox")}
                        checkBoxColor={colors.primary}
                        rightTextStyle={styles.checkBoxText} />
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordView")}>
                        <Text style={styles.message}> {t("authorization.cardMessage")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, (isButtonDisabled || loading) && styles.buttonDisabled]} onPress={handleSubmit} disabled={isButtonDisabled || loading}>
                        {loading
                            ? <ActivityIndicator color="#fff" />
                            : <Text style={styles.buttonText}>{t("authorization.buttonText")}</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


