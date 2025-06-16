import React, { useState } from 'react';
import { getStyles } from './styles';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, ToastAndroid, ActivityIndicator } from 'react-native';
import { useAuthorization } from '../presenters/useAuthorization';
import { useUIContext } from '../../../UIProvider';
import FastImage from 'react-native-fast-image';
import CheckBox from 'react-native-check-box';

export const AuthorizationView = () => {
    const { form, showPassword, onChangeLogin, onChangePassword, onAuthorize, setShowPassword, isChecked, toggleCheckbox } = useAuthorization();
    const { colors, t } = useUIContext();
    const styles = getStyles(colors);
    const [loading, setLoading] = useState(false);

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
                    <Text style={styles.label}>{t("authorization.ardTitlePassword")}</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={form.password}
                            onChangeText={onChangePassword}
                            placeholder="Введіть пароль"
                            secureTextEntry={!showPassword}
                            style={styles.input} />
                        <CheckBox
                            isChecked={isChecked}
                            onClick={toggleCheckbox} 
                        rightText={t("authorization.checkBox")}
                        checkBoxColor={colors.primary} 
                        rightTextStyle={styles.checkBoxText}/>
                        <TouchableOpacity style={styles.eyeButton} onPressIn={() => setShowPassword(!showPassword)}>
                            <FastImage source={require("../../../../assets/images/eye.png")} style={styles.eyeButton} accessibilityLabel="eye" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.message}> {t("authorization.cardMessage")}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isButtonDisabled || loading}>
                        {loading
                            ? <ActivityIndicator color="#fff" />
                            : <Text style={styles.buttonText}>{t("authorization.buttonText")}</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
