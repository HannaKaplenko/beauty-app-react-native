
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForgotPassword } from '../presenters/useForgotPassword';
import { useUIContext } from "../../../UIProvider";
import { getStyles } from './styles';

export const ForgotPasswordView = () => {
    const { colors, t } = useUIContext();                    
    const styles = getStyles(colors);
    const { email, onChangeEmail, onSubmit } = useForgotPassword();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t("forgotPassword.title")}</Text>
            <Text style={styles.label}>{t("forgotPassword.label")}</Text>
            <TextInput
                value='Your email'
                onChangeText={onChangeEmail}
                placeholder=''
                style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>{t("forgotPassword.button")}</Text>
            </TouchableOpacity>
        </View>
    );
}